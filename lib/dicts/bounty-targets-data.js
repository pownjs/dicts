const { line } = require('../helpers')

const prefix = 'arkadiyt/bounty-targets-data.git@033cb7522b8768e74532832d5c5cfba388ffdb3b'

const dicts = {
    'bounty-targets-data': {
        ...line({prefix, suffix: "data/federacy_data.json", stats: "237 lines, 5374 bytes"}),
        ...line({prefix, suffix: "data/bugcrowd_data.json", stats: "7989 lines, 188951 bytes"}),
        ...line({prefix, suffix: "data/hackerone_data.json", stats: "43652 lines, 1783623 bytes"}),
        ...line({prefix, suffix: "data/domains.txt", stats: "1599 lines, 32459 bytes"}),
        ...line({prefix, suffix: "data/hackenproof_data.json", stats: "407 lines, 9124 bytes"}),
        ...line({prefix, suffix: "data/hackerone_schema.graphql", stats: "24313 lines, 507107 bytes"}),
        ...line({prefix, suffix: "data/wildcards.txt", stats: "444 lines, 7357 bytes"}),
    }
}

exports.dicts = dicts
