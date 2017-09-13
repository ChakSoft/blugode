'use strict'

const Chalk = require('chalk')

const raw = (str, color = 'gray') => {
    str = `[${new Date().toLocaleString()}] ${str}`
    if (Chalk[color]) {
        console.log(Chalk[color](str))
    }
}

module.exports = {
    error : (str) => {
        raw(str, 'red')
    },
    info : (str) => {
        raw(str, 'blue')
    },
    warning : (str) => {
        raw(str, 'yellow')
    },
    success : (str) => {
        raw(str, 'green')
    },
    debug : (str) => {
        raw(str, 'grey')
    },
    log : (str) => {
        raw(str, 'white')
    },
}
