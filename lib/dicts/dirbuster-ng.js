const { line } = require('../helpers')

const p = 'digination/dirbuster-ng@0c34920e2ae35c75e23eb271926e54ccc8c2bbad'

const dicts = {
    'dirbuster-ng': {
        ...line({p, s: "wordlists/others/names.txt", l: 8607, b: 60266 }),
        ...line({p, s: "wordlists/others/common_pass.txt", l: 51, b: 418 }),
        ...line({p, s: "wordlists/euskera.txt", l: 53, b: 460 }),
        ...line({p, s: "wordlists/indexes.txt", l: 7, b: 43 }),
        ...line({p, s: "wordlists/catala.txt", l: 143, b: 1157 }),
        ...line({p, s: "wordlists/vulns/jrun.txt", l: 13, b: 306 }),
        ...line({p, s: "wordlists/vulns/fatwire.txt", l: 50, b: 863 }),
        ...line({p, s: "wordlists/vulns/websphere.txt", l: 365, b: 7696 }),
        ...line({p, s: "wordlists/vulns/weblogic.txt", l: 162, b: 2484 }),
        ...line({p, s: "wordlists/vulns/iis.txt", l: 59, b: 485 }),
        ...line({p, s: "wordlists/vulns/iplanet.txt", l: 36, b: 365 }),
        ...line({p, s: "wordlists/vulns/coldfusion.txt", l: 21, b: 706 }),
        ...line({p, s: "wordlists/vulns/oas.txt", l: 163, b: 2247 }),
        ...line({p, s: "wordlists/vulns/tomcat.txt", l: 37, b: 1784 }),
        ...line({p, s: "wordlists/vulns/fatwire_pagenames.txt", l: 340, b: 15180 }),
        ...line({p, s: "wordlists/vulns/apache.txt", l: 30, b: 230 }),
        ...line({p, s: "wordlists/vulns/sharepoint.txt", l: 462, b: 13401 }),
        ...line({p, s: "wordlists/vulns/netware.txt", l: 60, b: 465 }),
        ...line({p, s: "wordlists/vulns/vignette.txt", l: 74, b: 536 }),
        ...line({p, s: "wordlists/vulns/tests.txt", l: 34, b: 220 }),
        ...line({p, s: "wordlists/vulns/cgis.txt", l: 3494, b: 122829 }),
        ...line({p, s: "wordlists/vulns/sunas.txt", l: 52, b: 970 }),
        ...line({p, s: "wordlists/vulns/frontpage.txt", l: 34, b: 347 }),
        ...line({p, s: "wordlists/vulns/domino.txt", l: 229, b: 3113 }),
        ...line({p, s: "wordlists/big.txt", l: 4218, b: 30137 }),
        ...line({p, s: "wordlists/stress/test_ext.txt", l: 17576, b: 158184 }),
        ...line({p, s: "wordlists/stress/char.txt", l: 26, b: 52 }),
        ...line({p, s: "wordlists/stress/unicode.txt", l: 65536, b: 458752 }),
        ...line({p, s: "wordlists/stress/doble_uri_hex.txt", l: 256, b: 1536 }),
        ...line({p, s: "wordlists/stress/alphanum_case_extra.txt", l: 95, b: 189 }),
        ...line({p, s: "wordlists/stress/uri_hex.txt", l: 256, b: 1024 }),
        ...line({p, s: "wordlists/stress/alphanum_case.txt", l: 62, b: 124 }),
        ...line({p, s: "wordlists/common.txt", l: 1942, b: 13668 }),
        ...line({p, s: "wordlists/extensions_common.txt", l: 29, b: 142 }),
        ...line({p, s: "wordlists/spanish.txt", l: 267, b: 2195 }),
        ...line({p, s: "wordlists/mutations_common.txt", l: 49, b: 244 }),
        ...line({p, s: "wordlists/small.txt", l: 959, b: 6550 }),
    }
}

exports.dicts = dicts
