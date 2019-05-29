[![Follow on Twitter](https://img.shields.io/twitter/follow/pownjs.svg?logo=twitter)](https://twitter.com/pownjs)
![NPM](https://img.shields.io/npm/v/@pown/dicts.svg)
[![Fury](https://img.shields.io/badge/version-2x%20Fury-red.svg)](https://github.com/pownjs/lobby)
[![SecApps](https://img.shields.io/badge/credits-SecApps-black.svg)](https://secapps.com)

# Pown Dicts

Pown Dicts is a collection of various types of dictionaries.

## Credits

This tool is part of [secapps.com](https://secapps.com) open-source initiative.

```
  ___ ___ ___   _   ___ ___  ___
 / __| __/ __| /_\ | _ \ _ \/ __|
 \__ \ _| (__ / _ \|  _/  _/\__ \
 |___/___\___/_/ \_\_| |_|  |___/
  https://secapps.com
```

### Authors

* [@pdp](https://twitter.com/pdp) - https://pdparchitect.github.io/www/

## Quickstart

This tool is meant to be used as part of [Pown.js](https://github.com/pownjs/pown) but it can be invoked separately as an independent tool.

Install Pown first as usual:

```sh
$ npm install -g pown@latest
```

Invoke directly from Pown:

```sh
$ pown dicts
```

### Library Use

Install this module locally from the root of your project:

```sh
$ npm install @pown/dicts --save
```

Once done, invoke pown cli:

```sh
$ POWN_ROOT=. ./node_modules/.bin/pown-cli dicts
```

You can also use the global pown to invoke the tool locally:

```sh
$ POWN_ROOT=. pown dicts
```

## Usage

> **WARNING**: This pown command is currently under development and as a result will be subject to breaking changes.

```
pown dicts [options] <search>

Assorted Dictionaries

Options:
  --version       Show version number                                  [boolean]
  --modules, -m   Load modules                                          [string]
  --help          Show help                                            [boolean]
  --download, -d  Download found dictionaries         [boolean] [default: false]
  --regex, -r     Search with regex                   [boolean] [default: false]
```

## Supported Dictionaries

The following dictionaries are currently supported by this module:

* https://github.com/sullo/nikto.git
* https://github.com/bitquark/dnspop.git
* https://github.com/fuzzdb-project/fuzzdb.git
* https://github.com/digination/dirbuster-ng.git
* https://github.com/foospidy/payloads.git
* https://github.com/pownjs/pown-lists.git
* https://github.com/danielmiessler/SecLists
* https://github.com/berzerk0/Probable-Wordlists

## Improvements

This is a great start but there are a number of things that the original author would like to improve. In no particular order here is the current wish list:

* Ability to transform/cleanup the file output
* Download progress bar - this could be another module providing this feature
* Add the commonspeak datasets - those that work
