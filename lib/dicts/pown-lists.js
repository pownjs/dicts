const { line } = require('../helpers')

const prefix = 'pownjs/pown-lists.git@bccf5579fac99b4af5667dc7d9c23817f5b5dce4'

const dicts = {
    'pown-lists': {
        ...line({prefix, suffix: "data/bugbounty/domains.top.txt", stats: "74 lines, 856 bytes"}),
        ...line({prefix, suffix: "data/bugbounty/urls.txt", stats: "30118 lines, 973607 bytes"}),
        ...line({prefix, suffix: "data/bugbounty/domains.all.txt", stats: "28879 lines, 765584 bytes"}),
    }
}

exports.dicts = dicts
