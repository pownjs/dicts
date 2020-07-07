const { CDN_PREFIX } = require('./consts')

const line = ({ prefix, suffix, stats }) => {
    return {
        [suffix]: {
            uri: `${CDN_PREFIX}/${prefix}/${suffix}`,
            stats: stats
        }
    }
}

exports.line = line
