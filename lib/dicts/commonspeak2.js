const { line } = require('../helpers')

const prefix = 'assetnote/commonspeak2-wordlists.git@a514ff1becb4254a4a11a14e668d9313a3a6f9ed'

const dicts = {
    'commonspeak2': {
        ...line({ prefix, suffix: "routes/rails-1k-sample-august-2018.txt", stats: "1679 lines, 25842 bytes" }),
        ...line({ prefix, suffix: "subdomains/subdomains.txt", stats: "484701 lines, 5984344 bytes" }),
        ...line({ prefix, suffix: "wordswithext/php.txt", stats: "1000000 lines, 57575056 bytes" }),
        ...line({ prefix, suffix: "wordswithext/jsp.txt", stats: "100000 lines, 5913948 bytes" }),
        ...line({ prefix, suffix: "wordswithext/aspx.txt", stats: "82213 lines, 4766401 bytes" }),
        ...line({ prefix, suffix: "wordswithext/words.txt", stats: "1000000 lines, 59796643 bytes" }),
    }
}

exports.dicts = dicts
