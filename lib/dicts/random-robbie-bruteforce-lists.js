const { line } = require('../helpers')

const prefix = 'random-robbie/bruteforce-lists.git@9a0b6603e11f20f064634eabc83579ed751b681c'

const dicts = {
    'random-robbie-bruteforce-lists': {
        ...line({prefix, suffix: "web-inf.txt", stats: "77 lines, 2915 bytes"}),
        ...line({prefix, suffix: "dotfiles.txt", stats: "1344 lines, 18769 bytes"}),
        ...line({prefix, suffix: "cgi-files.txt", stats: "1192 lines, 27077 bytes"}),
        ...line({prefix, suffix: "webconfig.txt", stats: "53 lines, 999 bytes"}),
        ...line({prefix, suffix: "ec2.txt", stats: "22 lines, 540 bytes"}),
        ...line({prefix, suffix: "git_config.txt", stats: "49 lines, 979 bytes"}),
        ...line({prefix, suffix: "npmrc.txt", stats: "51 lines, 1473 bytes"}),
        ...line({prefix, suffix: "wordpress-random.txt", stats: "169 lines, 14578 bytes"}),
        ...line({prefix, suffix: "phpmyadmin.txt", stats: "199 lines, 3936 bytes"}),
        ...line({prefix, suffix: "htaccess", stats: "33 lines, 479 bytes"}),
        ...line({prefix, suffix: "yaml.txt", stats: "113 lines, 2221 bytes"}),
        ...line({prefix, suffix: "perl-files.txt", stats: "742 lines, 19625 bytes"}),
        ...line({prefix, suffix: "sql.txt", stats: "160 lines, 2979 bytes"}),
        ...line({prefix, suffix: "log.txt", stats: "103 lines, 1561 bytes"}),
        ...line({prefix, suffix: "properties-files.txt", stats: "39 lines, 982 bytes"}),
        ...line({prefix, suffix: "reallysafe-not.txt", stats: "1674 lines, 51264 bytes"}),
        ...line({prefix, suffix: "cgi-bin.txt", stats: "90 lines, 1971 bytes"}),
        ...line({prefix, suffix: "k8s.txt", stats: "56 lines, 974 bytes"}),
        ...line({prefix, suffix: "env.txt", stats: "590 lines, 12437 bytes"}),
        ...line({prefix, suffix: "config.txt", stats: "48 lines, 1051 bytes"}),
        ...line({prefix, suffix: "adminer.txt", stats: "194 lines, 4585 bytes"}),
        ...line({prefix, suffix: "phpunit.txt", stats: "505 lines, 33223 bytes"}),
        ...line({prefix, suffix: "keys.txt", stats: "7 lines, 124 bytes"}),
        ...line({prefix, suffix: "wp-content.txt", stats: "964 lines, 50524 bytes"}),
    }
}

exports.dicts = dicts
