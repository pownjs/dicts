const { line } = require('../helpers')

const prefix = 'bitquark/dnspop.git@9b4f3a7771bb43365a7824b96d98ab35b048c5e7'

const dicts = {
    'dnspop': {
        ...line({prefix, suffix: "results/bitquark_20160227_subdomains_popular_10000", stats: "10000 lines, 94028 bytes"}),
        ...line({prefix, suffix: "results/bitquark_20160227_subdomains_popular_100000", stats: "100000 lines, 1426217 bytes"}),
        ...line({prefix, suffix: "results/bitquark_20160227_subdomains_popular_1000000", stats: "1000000 lines, 11643746 bytes"}),
        ...line({prefix, suffix: "results/bitquark_20160227_subdomains_popular_1000", stats: "1000 lines, 4911 bytes"}),
    }
}

exports.dicts = dicts
