'use strict'

module.exports = {
    api : {
        /**
         * Port on which the API will listen
         * Can be between 1025 and 65535
         */
        port : 4444,
        /**
         * Debug mode (prints more logs)
         */
        debug : true,
    },
    database : {
        /**
         * Database host
         */
        host : 'localhost',
        /**
         * Database port (default 27017)
         */
        port : 27017,
        /**
         * Database user
         */
        user : 'foo',
        /**
         * Database password
         */
        pass : 'bar',
        /**
         * Database name
         */
        name : 'blugode',
    },
}
