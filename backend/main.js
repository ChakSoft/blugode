'use strict'

const Express = require('express')
const Compression = require('compression')
const BodyParser = require('body-parser')
const CookieParser = require('cookie-parser')

const Config = require('./config')
const Logger = require('./util/log')

const app = Express()

app
    .use(Compression())
    .use(BodyParser.json({ inflate : true }))
    .use(CookieParser())

if (!module.parent) {
    app.listen(Config.api.port, () => {
        Logger.info(`Listening on port ${Config.api.port}`)
    })
}

module.exports = app
