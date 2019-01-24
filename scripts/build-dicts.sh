#!/usr/bin/env bash

DIR=`dirname $0`
URL="https://cdn.jsdelivr.net/gh"

# THIS FILE REQUIRES REWRITING

(
    DIR=`mktemp -d`
    cd $DIR
    git clone --depth 1 'https://github.com/sullo/nikto.git'
    cd *
    REV=`git rev-parse HEAD`
    rm -rf */.git*
    echo "const dicts = {"
    echo "    'nikto': {"
    find ./ -type f \( -path '*/program/databases/*' \) | while read L
    do
        N=`echo $L | cut -d '/' -f2-`
        P="$URL/sullo/nikto@$REV/$N"
				S="`cat "$L" | wc -l | tr -d ' '` lines, `cat "$L" | wc -c | tr -d ' '` bytes"

        echo "        '$N': {uri: '$P', stats: '$S'},"
    done
    echo "    }"
    echo "}"
    echo
    echo "exports.dicts = dicts"
    rm -rf $DIR
) > $DIR/../lib/dicts/nikto.js

(
    DIR=`mktemp -d`
    cd $DIR
    git clone --depth 1 'https://github.com/bitquark/dnspop.git'
    cd *
    REV=`git rev-parse HEAD`
    rm -rf */.git*
    echo "const dicts = {"
    echo "    'dnspop': {"
    find ./ -type f \( -path '*/results/*' \) | grep -vi -e '.gitignore' -e 'with_count' | while read L
    do
        N=`echo $L | cut -d '/' -f2-`
        P="$URL/bitquark/dnspop@$REV/$N"
				S="`cat "$L" | wc -l | tr -d ' '` lines, `cat "$L" | wc -c | tr -d ' '` bytes"

        echo "        '$N': {uri: '$P', stats: '$S'},"
    done
    echo "    }"
    echo "}"
    echo
    echo "exports.dicts = dicts"
    rm -rf $DIR
) > $DIR/../lib/dicts/dnspop.js

(
    DIR=`mktemp -d`
    cd $DIR
    git clone --depth 1 'https://github.com/fuzzdb-project/fuzzdb.git'
    cd *
    REV=`git rev-parse HEAD`
    rm -rf ./.git*
    echo "const dicts = {"
    echo "    'fuzzdb': {"
    find ./ -type f \( -path '*/attack/*' -or -path '*/discovery/*' -or -path '*/regex/*' -or -path '*/web-backdoors/*' -or -path '*/wordlists-misc/*' -or -path '*/wordlists-user-passwd/*' \) | grep -vi -e 'README' | while read L
    do
        N=`echo $L | cut -d '/' -f2-`
        P="$URL/fuzzdb-project/fuzzdb@$REV/$N"
				S="`cat "$L" | wc -l | tr -d ' '` lines, `cat "$L" | wc -c | tr -d ' '` bytes"

        echo "        '$N': {uri: '$P', stats: '$S'},"
    done
    echo "    }"
    echo "}"
    echo
    echo "exports.dicts = dicts"
    rm -rf $DIR
) > $DIR/../lib/dicts/fuzzdb.js

(
    DIR=`mktemp -d`
    cd $DIR
    git clone --depth 1 'https://github.com/digination/dirbuster-ng.git'
    cd *
    REV=`git rev-parse HEAD`
    rm -rf ./.git*
    echo "const dicts = {"
    echo "    'dirbuster-ng': {"
    find ./ -type f \( -path '*/wordlists/*' \) | while read L
    do
        N=`echo $L | cut -d '/' -f2-`
        P="$URL/digination/dirbuster-ng@$REV/$N"
				S="`cat "$L" | wc -l | tr -d ' '` lines, `cat "$L" | wc -c | tr -d ' '` bytes"

        echo "        '$N': {uri: '$P', stats: '$S'},"
    done
    echo "    }"
    echo "}"
    echo
    echo "exports.dicts = dicts"
    rm -rf $DIR
) > $DIR/../lib/dicts/dirbuster-ng.js

(
    DIR=`mktemp -d`
    cd $DIR
    git clone --depth 1 'https://github.com/foospidy/payloads.git'
    cd *
    REV=`git rev-parse HEAD`
    rm -rf ./.git*
    echo "const dicts = {"
    echo "    'foospidy': {"
    find ./ -type f \( -path '*/other/*' -or -path '*/owasp/*' \) | while read L
    do
        N=`echo $L | cut -d '/' -f2-`
        P="$URL/foospidy/payloads@$REV/$N"
				S="`cat "$L" | wc -l | tr -d ' '` lines, `cat "$L" | wc -c | tr -d ' '` bytes"

        echo "        '$N': {uri: '$P', stats: '$S'},"
    done
    echo "    }"
    echo "}"
    echo
    echo "exports.dicts = dicts"
    rm -rf $DIR
) > $DIR/../lib/dicts/foospidy.js

(
    DIR=`mktemp -d`
    cd $DIR
    git clone --depth 1 'https://github.com/pownjs/pown-lists.git'
    cd *
    REV=`git rev-parse HEAD`
    rm -rf ./.git*
    echo "const dicts = {"
    echo "    'pown-lists': {"
    find ./ -type f \( -path '*/data/*' \) | while read L
    do
        N=`echo $L | cut -d '/' -f2-`
        P="$URL/pownjs/pown-lists@$REV/$N"
				S="`cat "$L" | wc -l | tr -d ' '` lines, `cat "$L" | wc -c | tr -d ' '` bytes"

        echo "        '$N': {uri: '$P', stats: '$S'},"
    done
    echo "    }"
    echo "}"
    echo
    echo "exports.dicts = dicts"
    rm -rf $DIR
) > $DIR/../lib/dicts/pown-lists.js

(
    DIR=`mktemp -d`
    cd $DIR
    git clone --depth 1 'https://github.com/danielmiessler/SecLists'
    cd *
    REV=`git rev-parse HEAD`
    rm -rf ./.git*
    echo "const dicts = {"
    echo "    'seclists': {"
    find ./ -type f \( -path '*' \) | grep -vi -e 'README' -e 'LICENSE' -e 'CONTRIBUTING' -e 'icloud' | while read L
    do
        N=`echo $L | cut -d '/' -f2-`
        P="$URL/danielmiessler/SecLists@$REV/$N"
				S="`cat "$L" | wc -l | tr -d ' '` lines, `cat "$L" | wc -c | tr -d ' '` bytes"

        echo "        '$N': {uri: '$P', stats: '$S'},"
    done
    echo "    }"
    echo "}"
    echo
    echo "exports.dicts = dicts"
    rm -rf $DIR
) > $DIR/../lib/dicts/seclists.js

(
    DIR=`mktemp -d`
    cd $DIR
    git clone --depth 1 'https://github.com/berzerk0/Probable-Wordlists'
    cd *
    REV=`git rev-parse HEAD`
    rm -rf ./.git*
    echo "const dicts = {"
    echo "    'probable-wordlists': {"
    find ./ -type f \( -path '*' \) | grep -vi -e 'LICENSE' -e '.md' -e '.rule' -e '.torrent' -e '.png' | while read L
    do
        N=`echo $L | cut -d '/' -f2-`
        P="$URL/berzerk0/Probable-Wordlists@$REV/$N"
				S="`cat "$L" | wc -l | tr -d ' '` lines, `cat "$L" | wc -c | tr -d ' '` bytes"

        echo "        '$N': {uri: '$P', stats: '$S'},"
    done
    echo "    }"
    echo "}"
    echo
    echo "exports.dicts = dicts"
    rm -rf $DIR
) > $DIR/../lib/dicts/probable-wordlists.js

(
    DIR=`mktemp -d`
    cd $DIR
    git clone --depth 1 'https://github.com/danielmiessler/RobotsDisallowed'
    cd *
    REV=`git rev-parse HEAD`
    rm -rf ./.git*
    echo "const dicts = {"
    echo "    'robots-disallowed': {"
    ls *.txt | while read L
    do
        N=`echo $L | cut -d '/' -f2-`
        P="$URL/danielmiessler/RobotsDisallowed@$REV/$N"
				S="`cat "$L" | wc -l | tr -d ' '` lines, `cat "$L" | wc -c | tr -d ' '` bytes"

        echo "        '$N': {uri: '$P', stats: '$S'},"
    done
    echo "    }"
    echo "}"
    echo
    echo "exports.dicts = dicts"
    rm -rf $DIR
) > $DIR/../lib/dicts/robots-disallowed.js
