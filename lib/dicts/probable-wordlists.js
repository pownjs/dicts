const { line } = require('../helpers')

const p = 'berzerk0/Probable-Wordlists@2df55facf06c7742f2038a8f6607ea9071596128'

const dicts = {
    'probable-wordlists': {
        ...line({p, s: "Real-Passwords/Top12Thousand-probable-v2.txt", l: 12645, b: 100206 }),
        ...line({p, s: "Real-Passwords/Top1575-probable-v2.txt", l: 1575, b: 12261 }),
        ...line({p, s: "Real-Passwords/Top207-probable-v2.txt", l: 207, b: 1620 }),
        ...line({p, s: "Real-Passwords/WPA-Length/Top447-WPA-probable-v2.txt", l: 447, b: 4148 }),
        ...line({p, s: "Real-Passwords/WPA-Length/Top62-WPA-probable-v2.txt", l: 62, b: 573 }),
        ...line({p, s: "Real-Passwords/WPA-Length/Top204Thousand-WPA-probable-v2.txt", l: 203806, b: 2121750 }),
        ...line({p, s: "Real-Passwords/WPA-Length/Top4800-WPA-probable-v2.txt", l: 4800, b: 45276 }),
        ...line({p, s: "Real-Passwords/Top304Thousand-probable-v2.txt", l: 303872, b: 2811012 }),
        ...line({p, s: "Dictionary-Style/Technical_and_Default/Username_Default_ProbWL.txt", l: 1575, b: 11461 }),
        ...line({p, s: "Dictionary-Style/Technical_and_Default/Domains_ProbWL.txt", l: 265568, b: 2707829 }),
        ...line({p, s: "Dictionary-Style/Technical_and_Default/Password_Default_ProbWL.txt", l: 1613, b: 12159 }),
        ...line({p, s: "Dictionary-Style/Technical_and_Default/tld.txt", l: 265, b: 1195 }),
        ...line({p, s: "Analysis-Files/Appearances-Top304Thousand-probable-v2.txt", l: 303872, b: 3786941 }),
        ...line({p, s: "Analysis-Files/Appearances-Top1575-probable-v2.txt", l: 1575, b: 18561 }),
        ...line({p, s: "Analysis-Files/Appearances-Top12Thousand-probable-v2.txt", l: 12646, b: 150787 }),
    }
}

exports.dicts = dicts
