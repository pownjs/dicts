#!/usr/bin/env bash

SCRIPT_DIR=`dirname $0`

function generate {
    git_name="$1"
    dict_name="$2"
    file_selector="$3"

    (
        DIR=`mktemp -d`

        cd $DIR

        git clone --depth 1 "https://github.com/$git_name"

        cd *

        REV=`git rev-parse HEAD`

        rm -rf .git*

        find ./ -type f \( -iname '*.gif' -or -iname '*.png' -or -iname '*.jpg' -or -iname '*.jpeg' \) -exec rm -rf '{}' ';'
        find ./ -type f \( -iname 'README' -or -iname 'LICENSE' -or -iname 'CONTRIBUTING' -or -iname 'CONTRIBUTORS' \) -exec rm -rf '{}' ';'
        find ./ -type f \( -iname 'README.md' -or -iname 'LICENSE.md' -or -iname 'CONTRIBUTING.md' -or -iname 'CONTRIBUTORS.md' \) -exec rm -rf '{}' ';'
        find ./ -type f \( -iname 'README.txt' -or -iname 'LICENSE.txt' -or -iname 'CONTRIBUTING.txt' -or -iname 'CONTRIBUTORS.txt' \) -exec rm -rf '{}' ';'

        echo "const { line } = require('../helpers')"
        echo
        echo "const p = '$git_name@${REV}'"
        echo
        echo "const dicts = {"
        echo "    '$dict_name': {"

        eval $file_selector | while read L
        do
            N=`echo $L | cut -d '/' -f2-`

            echo "        ...line({p, s: `jq -n --arg p "$N" '$p'`, l: `cat "$L" | wc -l | tr -d ' '`, b: `cat "$L" | wc -c | tr -d ' '` }),"
        done

        echo "    }"
        echo "}"
        echo
        echo "exports.dicts = dicts"

        rm -rf $DIR
    ) > "$SCRIPT_DIR/../lib/dicts/$dict_name.js"
}

generate 'sullo/nikto' 'nikto' "find ./ -type f \( -path '*/program/databases/*' \)" &
generate 'bitquark/dnspop' 'dnspop' "find ./ -type f \( -path '*/results/*' \) | grep -vi -e 'with_count'" &
generate 'fuzzdb-project/fuzzdb' 'fuzzdb' "find ./ -type f \( -path '*/attack/*' -or -path '*/discovery/*' -or -path '*/regex/*' -or -path '*/wordlists-misc/*' -or -path '*/wordlists-user-passwd/*' \) | grep -vi -e 'README'" &
generate 'digination/dirbuster-ng' 'dirbuster-ng' "find ./ -type f \( -path '*/wordlists/*' \)" &
generate 'foospidy/payloads' 'foospidy' "find ./ -type f \( -path '*/other/*' -or -path '*/owasp/*' \)" &
generate 'pownjs/pown-lists' 'pown-lists' "find ./ -type f \( -path '*/data/*' \)" &
generate 'danielmiessler/SecLists' 'seclists' "find ./ -type f \( -path '*' \) | grep -vi -e 'Web-Shells' -e 'Payloads' -e 'icloud'" &
generate 'berzerk0/Probable-Wordlists' 'probable-wordlists' "find ./ -type f \( -path '*' \) | grep -vi -e '.md' -e '.rule' -e '.torrent'" &
generate 'danielmiessler/RobotsDisallowed' 'robots-disallowed' "ls *.txt" &
generate 'assetnote/commonspeak2-wordlists' 'commonspeak2' "find ./ -type f \( -path '*' \) | grep -vi -e '.md'" &
generate 'arkadiyt/bounty-targets-data' 'bounty-targets-data' "find ./ -type f \( -path '*' \) | grep -vi -e '.md'" &
generate 'random-robbie/bruteforce-lists' 'random-robbie-bruteforce-lists' "find ./ -type f \( -path '*' \) | grep -vi -e '.md'" &

wait
