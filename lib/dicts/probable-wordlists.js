const { line } = require('../helpers')

const prefix = 'berzerk0/Probable-Wordlists.git@2df55facf06c7742f2038a8f6607ea9071596128'

const dicts = {
    'probable-wordlists': {
        ...line({prefix, suffix: "Real-Passwords/Top12Thousand-probable-v2.txt", stats: "12645 lines, 100206 bytes"}),
        ...line({prefix, suffix: "Real-Passwords/Top1575-probable-v2.txt", stats: "1575 lines, 12261 bytes"}),
        ...line({prefix, suffix: "Real-Passwords/Top207-probable-v2.txt", stats: "207 lines, 1620 bytes"}),
        ...line({prefix, suffix: "Real-Passwords/WPA-Length/Top447-WPA-probable-v2.txt", stats: "447 lines, 4148 bytes"}),
        ...line({prefix, suffix: "Real-Passwords/WPA-Length/Top62-WPA-probable-v2.txt", stats: "62 lines, 573 bytes"}),
        ...line({prefix, suffix: "Real-Passwords/WPA-Length/Top204Thousand-WPA-probable-v2.txt", stats: "203806 lines, 2121750 bytes"}),
        ...line({prefix, suffix: "Real-Passwords/WPA-Length/Top4800-WPA-probable-v2.txt", stats: "4800 lines, 45276 bytes"}),
        ...line({prefix, suffix: "Real-Passwords/Top304Thousand-probable-v2.txt", stats: "303872 lines, 2811012 bytes"}),
        ...line({prefix, suffix: "Dictionary-Style/Technical_and_Default/Username_Default_ProbWL.txt", stats: "1575 lines, 11461 bytes"}),
        ...line({prefix, suffix: "Dictionary-Style/Technical_and_Default/Domains_ProbWL.txt", stats: "265568 lines, 2707829 bytes"}),
        ...line({prefix, suffix: "Dictionary-Style/Technical_and_Default/Password_Default_ProbWL.txt", stats: "1613 lines, 12159 bytes"}),
        ...line({prefix, suffix: "Dictionary-Style/Technical_and_Default/tld.txt", stats: "265 lines, 1195 bytes"}),
        ...line({prefix, suffix: "Analysis-Files/Appearances-Top304Thousand-probable-v2.txt", stats: "303872 lines, 3786941 bytes"}),
        ...line({prefix, suffix: "Analysis-Files/Appearances-Top1575-probable-v2.txt", stats: "1575 lines, 18561 bytes"}),
        ...line({prefix, suffix: "Analysis-Files/Appearances-Top12Thousand-probable-v2.txt", stats: "12646 lines, 150787 bytes"}),
    }
}

exports.dicts = dicts
