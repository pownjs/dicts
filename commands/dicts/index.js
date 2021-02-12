exports.yargs = {
    command: 'dicts [options] <search>',
    describe: 'Assorted Dictionaries',
    aliases: ['dict', 'dictionaries', 'dictionary'],

    builder: {
        print: {
            alias: ['p'],
            type: 'boolean',
            default: false,
            description: 'Print found dictionaries'
        },

        download: {
            alias: ['d'],
            type: 'boolean',
            default: false,
            description: 'Download found dictionaries'
        },

        regex: {
            alias: ['r'],
            type: 'boolean',
            default: false,
            description: 'Search with regex'
        },

        minimatch: {
            alias: ['m'],
            type: 'boolean',
            default: false,
            description: 'Search with minimatch'
        }
    },

    handler: (argv) => {
        const dicts = require('../../lib/dicts')

        const locations = {}

        Object.entries(dicts).forEach(([name, dict]) => {
            Object.entries(dict).forEach(([path, def]) => {
                locations[`${name}/${path}`] = def
            })
        })

        let results

        if (argv.regex) {
            const regex = new RegExp(argv.search, 'i')

            results = Object.keys(locations).filter(l => regex.test(l))
        }
        else
        if (argv.minimatch) {
            const minimatch = require('minimatch')

            results = Object.keys(locations).filter(minimatch.filter(argv.search))
        }
        else {
            const search = argv.search.trim().toLowerCase()

            results = Object.keys(locations).filter(l => l.trim().toLowerCase().indexOf(search) >= 0)
        }

        results.forEach((result) => {
            console.info(result)
        })

        if (argv.print) {
            const https = require('https')

            results.forEach((location) => {
                const { uri } = locations[location]

                const req = https.get(uri, (res) => {
                    const chunks = []

                    res.on('data', (chunk) => {
                        chunks.push(chunk)
                    })

                    res.on('end', () => {
                        const data = Buffer.concat(chunks)

                        console.log(data.toString())
                    })
                })

                req.on('error', (error) => {
                    console.error(error)
                })
            })
        }

        if (argv.download) {
            const fs = require('fs')
            const path = require('path')
            const https = require('https')

            results.forEach((location) => {
                const { uri } = locations[location]

                const req = https.get(uri, (res) => {
                    const chunks = []

                    res.on('data', (chunk) => {
                        chunks.push(chunk)
                    })

                    res.on('end', () => {
                        const data = Buffer.concat(chunks)

                        fs.writeFile(path.basename(location), data, (err) => {
                            if (err) {
                                console.error(err)
                            }
                        })
                    })
                })

                req.on('error', (error) => {
                    console.error(error)
                })
            })
        }
    }
}
