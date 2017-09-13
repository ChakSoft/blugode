'use strict'

const DistConfig = require('./config.dist')
const LocalConfig = require('./config')

module.exports = Object.assign({}, DistConfig, LocalConfig)
