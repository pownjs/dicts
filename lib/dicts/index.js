const nikto = require('./nikto')
const dnspop = require('./dnspop')
const fuzzdb = require('./fuzzdb')
const seclists = require('./seclists')
const foospidy = require('./foospidy')
const pownLists = require('./pown-lists')
const dirbusterNG = require('./dirbuster-ng')
const robotsDisallowed = require('./robots-disallowed')
const probableWordlists = require('./probable-wordlists')

const dicts = {
    ...dirbusterNG.dicts,
    ...dnspop.dicts,
    ...fuzzdb.dicts,
    ...seclists.dicts,
    ...foospidy.dicts,
    ...nikto.dicts,
    ...pownLists.dicts,
    ...robotsDisallowed.dicts,
    ...probableWordlists.dicts
}

module.exports = dicts
