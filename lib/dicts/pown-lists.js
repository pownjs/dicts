const { line } = require('../helpers')

const p = 'pownjs/pown-lists@bccf5579fac99b4af5667dc7d9c23817f5b5dce4'

const dicts = {
    'pown-lists': {
        ...line({p, s: "data/bugbounty/domains.top.txt", l: 74, b: 856 }),
        ...line({p, s: "data/bugbounty/urls.txt", l: 30118, b: 973607 }),
        ...line({p, s: "data/bugbounty/domains.all.txt", l: 28879, b: 765584 }),
    }
}

exports.dicts = dicts
