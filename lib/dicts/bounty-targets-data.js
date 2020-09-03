const { line } = require('../helpers')

const p = 'arkadiyt/bounty-targets-data@ef6209cea72740adebefdf7d393e86bb32a71b76'

const dicts = {
    'bounty-targets-data': {
        ...line({p, s: "data/federacy_data.json", l: 307, b: 6850 }),
        ...line({p, s: "data/bugcrowd_data.json", l: 9678, b: 238009 }),
        ...line({p, s: "data/hackerone_data.json", l: 45859, b: 1875769 }),
        ...line({p, s: "data/domains.txt", l: 1923, b: 39066 }),
        ...line({p, s: "data/yeswehack_data.json", l: 977, b: 23327 }),
        ...line({p, s: "data/intigriti_data.json", l: 1744, b: 43770 }),
        ...line({p, s: "data/hackenproof_data.json", l: 578, b: 14089 }),
        ...line({p, s: "data/hackerone_schema.graphql", l: 25422, b: 531814 }),
        ...line({p, s: "data/wildcards.txt", l: 543, b: 8793 }),
    }
}

exports.dicts = dicts
