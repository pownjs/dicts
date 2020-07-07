const { line } = require('../helpers')

const prefix = 'danielmiessler/RobotsDisallowed.git@5ef23b896bfdd54de4fe8dbaf171812c13bfb64f'

const dicts = {
    'robots-disallowed': {
        ...line({ prefix, suffix: "curated.txt", stats: "498 lines, 8815 bytes" }),
        ...line({ prefix, suffix: "top10000.txt", stats: "10000 lines, 191457 bytes" }),
        ...line({ prefix, suffix: "top1000.txt", stats: "1000 lines, 13645 bytes" }),
        ...line({ prefix, suffix: "top100.txt", stats: "100 lines, 1434 bytes" }),
        ...line({ prefix, suffix: "top10.txt", stats: "10 lines, 147 bytes" }),
    }
}

exports.dicts = dicts
