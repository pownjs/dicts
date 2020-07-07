const { line } = require('../helpers')

const p = 'danielmiessler/RobotsDisallowed@5ef23b896bfdd54de4fe8dbaf171812c13bfb64f'

const dicts = {
    'robots-disallowed': {
        ...line({p, s: "curated.txt", l: 498, b: 8815 }),
        ...line({p, s: "top10000.txt", l: 10000, b: 191457 }),
        ...line({p, s: "top1000.txt", l: 1000, b: 13645 }),
        ...line({p, s: "top100.txt", l: 100, b: 1434 }),
        ...line({p, s: "top10.txt", l: 10, b: 147 }),
    }
}

exports.dicts = dicts
