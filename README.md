[![Follow on Twitter](https://img.shields.io/twitter/follow/pownjs.svg?logo=twitter)](https://twitter.com/pownjs)

# Pown Dicts

Pown Dicts is a collection of various types of dictionaries.

## Quickstart

If installed globally as part of [Pown.js](https://github.com/pownjs/pown) invoke like this:

```sh
$ pown dicts
```

Otherwise install this module from the root of your project:

```sh
$ npm install @pown/dicts --save
```

Once done, invoke pown dicts like this:

```sh
$ ./node_modules/.bin/pown-cli dicts
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

