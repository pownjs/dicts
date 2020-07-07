const { CDN_PREFIX } = require('./consts')

const line = ({ p: prefix, s: suffix, l: lines, b: bytes }) => {
    return {
        [suffix]: {
            uri: `${CDN_PREFIX}/${prefix}/${suffix}`,
            stats: `${lines} lines, ${bytes} bytes`
        }
    }
}

exports.line = line
