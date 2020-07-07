const { line } = require('../helpers')

const p = 'arkadiyt/bounty-targets-data@033cb7522b8768e74532832d5c5cfba388ffdb3b'

const dicts = {
    'bounty-targets-data': {
        ...line({ p, s: "data/federacy_data.json", l: 237, b: 5374 }),
        ...line({ p, s: "data/bugcrowd_data.json", l: 7989, b: 188951 }),
        ...line({ p, s: "data/hackerone_data.json", l: 43652, b: 1783623 }),
        ...line({ p, s: "data/domains.txt", l: 1599, b: 32459 }),
        ...line({ p, s: "data/hackenproof_data.json", l: 407, b: 9124 }),
        ...line({ p, s: "data/hackerone_schema.graphql", l: 24313, b: 507107 }),
        ...line({ p, s: "data/wildcards.txt", l: 444, b: 7357 }),
    }
}

exports.dicts = dicts
