function getRandom(min, max) {
    max -= min
    return Math.floor((Math.random() * max) + min)
}

module.exports = getRandom