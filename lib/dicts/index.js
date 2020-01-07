const nikto = require('./nikto')
const dnspop = require('./dnspop')
const fuzzdb = require('./fuzzdb')
const seclists = require('./seclists')
const foospidy = require('./foospidy')
const pownLists = require('./pown-lists')
const dirbusterNG = require('./dirbuster-ng')
const commonspeak2 = require('./commonspeak2')
const robotsDisallowed = require('./robots-disallowed')
const probableWordlists = require('./probable-wordlists')
const bountyTargetsData = require('./bounty-targets-data')

const dicts = {
    ...dirbusterNG.dicts,
    ...dnspop.dicts,
    ...fuzzdb.dicts,
    ...seclists.dicts,
    ...foospidy.dicts,
    ...nikto.dicts,
    ...pownLists.dicts,
    ...robotsDisallowed.dicts,
    ...probableWordlists.dicts,
    ...commonspeak2.dicts,
    ...bountyTargetsData.dicts
}

module.exports = dicts
