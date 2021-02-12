const { line } = require('../helpers')

const p = 'arkadiyt/bounty-targets-data@aeb7fbd49ad209e0be7cf8bfd090da0581c65f42'

const dicts = {
    'bounty-targets-data': {
        ...line({p, s: "data/federacy_data.json", l: 357, b: 7897 }),
        ...line({p, s: "data/bugcrowd_data.json", l: 7984, b: 199650 }),
        ...line({p, s: "data/hackerone_data.json", l: 60120, b: 2448095 }),
        ...line({p, s: "data/domains.txt", l: 2316, b: 47964 }),
        ...line({p, s: "data/yeswehack_data.json", l: 1101, b: 26174 }),
        ...line({p, s: "data/intigriti_data.json", l: 2809, b: 85680 }),
        ...line({p, s: "data/hackenproof_data.json", l: 929, b: 23162 }),
        ...line({p, s: "data/hackerone_schema.graphql", l: 28892, b: 595940 }),
        ...line({p, s: "data/wildcards.txt", l: 675, b: 10904 }),
    }
}

exports.dicts = dicts
