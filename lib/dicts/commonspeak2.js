const { line } = require('../helpers')

const p = 'assetnote/commonspeak2-wordlists@a514ff1becb4254a4a11a14e668d9313a3a6f9ed'

const dicts = {
    'commonspeak2': {
        ...line({p, s: "routes/rails-1k-sample-august-2018.txt", l: 1679, b: 25842 }),
        ...line({p, s: "subdomains/subdomains.txt", l: 484701, b: 5984344 }),
        ...line({p, s: "wordswithext/php.txt", l: 1000000, b: 57575056 }),
        ...line({p, s: "wordswithext/jsp.txt", l: 100000, b: 5913948 }),
        ...line({p, s: "wordswithext/aspx.txt", l: 82213, b: 4766401 }),
        ...line({p, s: "wordswithext/words.txt", l: 1000000, b: 59796643 }),
    }
}

exports.dicts = dicts
