const { line } = require('../helpers')

const p = 'random-robbie/bruteforce-lists@3ef0ddf125eca298c8fb141e294a512201a370b4'

const dicts = {
    'random-robbie-bruteforce-lists': {
        ...line({p, s: "web-inf.txt", l: 77, b: 2915 }),
        ...line({p, s: "dotfiles.txt", l: 1344, b: 18769 }),
        ...line({p, s: "cgi-files.txt", l: 1192, b: 27077 }),
        ...line({p, s: "webconfig.txt", l: 53, b: 999 }),
        ...line({p, s: "ec2.txt", l: 22, b: 540 }),
        ...line({p, s: "git_config.txt", l: 49, b: 979 }),
        ...line({p, s: "npmrc.txt", l: 51, b: 1473 }),
        ...line({p, s: "wordpress-random.txt", l: 169, b: 14578 }),
        ...line({p, s: "peoplesoft.txt", l: 58, b: 408 }),
        ...line({p, s: "phpmyadmin.txt", l: 199, b: 3936 }),
        ...line({p, s: "htaccess", l: 33, b: 479 }),
        ...line({p, s: "yaml.txt", l: 113, b: 2221 }),
        ...line({p, s: "api.txt", l: 588, b: 13919 }),
        ...line({p, s: "perl-files.txt", l: 742, b: 19625 }),
        ...line({p, s: "sql.txt", l: 160, b: 2979 }),
        ...line({p, s: "log.txt", l: 103, b: 1561 }),
        ...line({p, s: "properties-files.txt", l: 39, b: 982 }),
        ...line({p, s: "reallysafe-not.txt", l: 1674, b: 51264 }),
        ...line({p, s: "cgi-bin.txt", l: 90, b: 1971 }),
        ...line({p, s: "k8s.txt", l: 56, b: 974 }),
        ...line({p, s: "params.txt", l: 2583, b: 24418 }),
        ...line({p, s: "env.txt", l: 590, b: 12437 }),
        ...line({p, s: "config.txt", l: 48, b: 1051 }),
        ...line({p, s: "adminer.txt", l: 194, b: 4585 }),
        ...line({p, s: "windows-lfi.txt", l: 6610, b: 518809 }),
        ...line({p, s: "phpunit.txt", l: 597, b: 38705 }),
        ...line({p, s: "keys.txt", l: 7, b: 124 }),
        ...line({p, s: "wp-content.txt", l: 5524, b: 358817 }),
    }
}

exports.dicts = dicts
