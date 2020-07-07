const { line } = require('../helpers')

const p = 'bitquark/dnspop@9b4f3a7771bb43365a7824b96d98ab35b048c5e7'

const dicts = {
    'dnspop': {
        ...line({p, s: "results/bitquark_20160227_subdomains_popular_10000", l: 10000, b: 94028 }),
        ...line({p, s: "results/bitquark_20160227_subdomains_popular_100000", l: 100000, b: 1426217 }),
        ...line({p, s: "results/bitquark_20160227_subdomains_popular_1000000", l: 1000000, b: 11643746 }),
        ...line({p, s: "results/bitquark_20160227_subdomains_popular_1000", l: 1000, b: 4911 }),
    }
}

exports.dicts = dicts
