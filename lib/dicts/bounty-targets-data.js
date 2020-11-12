const { line } = require('../helpers')

const p = 'arkadiyt/bounty-targets-data@950cfc8d49255ec90c6e926ed7da1d40a10892e2'

const dicts = {
    'bounty-targets-data': {
        ...line({p, s: "data/federacy_data.json", l: 334, b: 7422 }),
        ...line({p, s: "data/bugcrowd_data.json", l: 7493, b: 187443 }),
        ...line({p, s: "data/hackerone_data.json", l: 49455, b: 2024481 }),
        ...line({p, s: "data/domains.txt", l: 2073, b: 42647 }),
        ...line({p, s: "data/yeswehack_data.json", l: 973, b: 23226 }),
        ...line({p, s: "data/intigriti_data.json", l: 2202, b: 54762 }),
        ...line({p, s: "data/hackenproof_data.json", l: 758, b: 18715 }),
        ...line({p, s: "data/hackerone_schema.graphql", l: 26511, b: 556485 }),
        ...line({p, s: "data/wildcards.txt", l: 633, b: 10176 }),
    }
}

exports.dicts = dicts
