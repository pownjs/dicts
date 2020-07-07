const { line } = require('../helpers')

const prefix = 'sullo/nikto.git@4c939abbcf94a9a1dc9140731bbf1b87d0fb13e5'

const dicts = {
    'nikto': {
        ...line({prefix, suffix: "program/databases/db_dictionary", stats: "1840 lines, 13378 bytes"}),
        ...line({prefix, suffix: "program/databases/db_404_strings", stats: "55 lines, 2093 bytes"}),
        ...line({prefix, suffix: "program/databases/db_tests", stats: "6968 lines, 1196221 bytes"}),
        ...line({prefix, suffix: "program/databases/db_parked_strings", stats: "21 lines, 993 bytes"}),
        ...line({prefix, suffix: "program/databases/db_embedded", stats: "33 lines, 3045 bytes"}),
        ...line({prefix, suffix: "program/databases/db_dir_traversal", stats: "24 lines, 1156 bytes"}),
        ...line({prefix, suffix: "program/databases/db_realms", stats: "189 lines, 11024 bytes"}),
        ...line({prefix, suffix: "program/databases/db_favicon", stats: "381 lines, 25387 bytes"}),
        ...line({prefix, suffix: "program/databases/db_multiple_index", stats: "36 lines, 975 bytes"}),
        ...line({prefix, suffix: "program/databases/db_drupal", stats: "6263 lines, 145249 bytes"}),
        ...line({prefix, suffix: "program/databases/db_httpoptions", stats: "30 lines, 1604 bytes"}),
        ...line({prefix, suffix: "program/databases/db_outdated", stats: "1273 lines, 133005 bytes"}),
        ...line({prefix, suffix: "program/databases/db_variables", stats: "57 lines, 4897 bytes"}),
        ...line({prefix, suffix: "program/databases/db_domino", stats: "292 lines, 33272 bytes"}),
        ...line({prefix, suffix: "program/databases/db_content_search", stats: "39 lines, 3266 bytes"}),
        ...line({prefix, suffix: "program/databases/db_server_msgs", stats: "282 lines, 33542 bytes"}),
        ...line({prefix, suffix: "program/databases/db_headers", stats: "120 lines, 2468 bytes"}),
    }
}

exports.dicts = dicts
