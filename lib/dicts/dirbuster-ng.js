const { line } = require('../helpers')

const prefix = 'digination/dirbuster-ng.git@0c34920e2ae35c75e23eb271926e54ccc8c2bbad'

const dicts = {
    'dirbuster-ng': {
        ...line({ prefix, suffix: "wordlists/others/names.txt", stats: "8607 lines, 60266 bytes" }),
        ...line({ prefix, suffix: "wordlists/others/common_pass.txt", stats: "51 lines, 418 bytes" }),
        ...line({ prefix, suffix: "wordlists/euskera.txt", stats: "53 lines, 460 bytes" }),
        ...line({ prefix, suffix: "wordlists/indexes.txt", stats: "7 lines, 43 bytes" }),
        ...line({ prefix, suffix: "wordlists/catala.txt", stats: "143 lines, 1157 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/jrun.txt", stats: "13 lines, 306 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/fatwire.txt", stats: "50 lines, 863 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/websphere.txt", stats: "365 lines, 7696 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/weblogic.txt", stats: "162 lines, 2484 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/iis.txt", stats: "59 lines, 485 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/iplanet.txt", stats: "36 lines, 365 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/coldfusion.txt", stats: "21 lines, 706 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/oas.txt", stats: "163 lines, 2247 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/tomcat.txt", stats: "37 lines, 1784 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/fatwire_pagenames.txt", stats: "340 lines, 15180 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/apache.txt", stats: "30 lines, 230 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/sharepoint.txt", stats: "462 lines, 13401 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/netware.txt", stats: "60 lines, 465 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/vignette.txt", stats: "74 lines, 536 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/tests.txt", stats: "34 lines, 220 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/cgis.txt", stats: "3494 lines, 122829 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/sunas.txt", stats: "52 lines, 970 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/frontpage.txt", stats: "34 lines, 347 bytes" }),
        ...line({ prefix, suffix: "wordlists/vulns/domino.txt", stats: "229 lines, 3113 bytes" }),
        ...line({ prefix, suffix: "wordlists/big.txt", stats: "4218 lines, 30137 bytes" }),
        ...line({ prefix, suffix: "wordlists/stress/test_ext.txt", stats: "17576 lines, 158184 bytes" }),
        ...line({ prefix, suffix: "wordlists/stress/char.txt", stats: "26 lines, 52 bytes" }),
        ...line({ prefix, suffix: "wordlists/stress/unicode.txt", stats: "65536 lines, 458752 bytes" }),
        ...line({ prefix, suffix: "wordlists/stress/doble_uri_hex.txt", stats: "256 lines, 1536 bytes" }),
        ...line({ prefix, suffix: "wordlists/stress/alphanum_case_extra.txt", stats: "95 lines, 189 bytes" }),
        ...line({ prefix, suffix: "wordlists/stress/uri_hex.txt", stats: "256 lines, 1024 bytes" }),
        ...line({ prefix, suffix: "wordlists/stress/alphanum_case.txt", stats: "62 lines, 124 bytes" }),
        ...line({ prefix, suffix: "wordlists/common.txt", stats: "1942 lines, 13668 bytes" }),
        ...line({ prefix, suffix: "wordlists/extensions_common.txt", stats: "29 lines, 142 bytes" }),
        ...line({ prefix, suffix: "wordlists/spanish.txt", stats: "267 lines, 2195 bytes" }),
        ...line({ prefix, suffix: "wordlists/mutations_common.txt", stats: "49 lines, 244 bytes" }),
        ...line({ prefix, suffix: "wordlists/small.txt", stats: "959 lines, 6550 bytes" }),
    }
}

exports.dicts = dicts
