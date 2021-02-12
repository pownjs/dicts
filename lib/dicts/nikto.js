const { line } = require('../helpers')

const p = 'sullo/nikto@2aa550f70e53212c76693b78c6960aadcf8443f2'

const dicts = {
    'nikto': {
        ...line({p, s: "program/databases/db_dictionary", l: 1840, b: 13378 }),
        ...line({p, s: "program/databases/db_404_strings", l: 55, b: 2093 }),
        ...line({p, s: "program/databases/db_tests", l: 6993, b: 1199497 }),
        ...line({p, s: "program/databases/db_parked_strings", l: 21, b: 993 }),
        ...line({p, s: "program/databases/db_embedded", l: 33, b: 3045 }),
        ...line({p, s: "program/databases/db_dir_traversal", l: 24, b: 1156 }),
        ...line({p, s: "program/databases/db_realms", l: 189, b: 11024 }),
        ...line({p, s: "program/databases/db_favicon", l: 381, b: 25387 }),
        ...line({p, s: "program/databases/db_multiple_index", l: 36, b: 975 }),
        ...line({p, s: "program/databases/db_drupal", l: 6263, b: 145249 }),
        ...line({p, s: "program/databases/db_httpoptions", l: 30, b: 1604 }),
        ...line({p, s: "program/databases/db_outdated", l: 1273, b: 133006 }),
        ...line({p, s: "program/databases/db_variables", l: 57, b: 4897 }),
        ...line({p, s: "program/databases/db_domino", l: 292, b: 33272 }),
        ...line({p, s: "program/databases/db_content_search", l: 39, b: 3266 }),
        ...line({p, s: "program/databases/db_server_msgs", l: 282, b: 33542 }),
        ...line({p, s: "program/databases/db_headers", l: 120, b: 2468 }),
    }
}

exports.dicts = dicts
