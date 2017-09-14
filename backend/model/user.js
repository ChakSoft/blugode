'use strict'

const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        username : {
            type : String,
            unique : true,
            required : true,
        },
        password : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : true,
        },
        rights : {
            type : Number,
            required : true,
            default : 1,
        },
        createdAt : {
            type : Date,
            default : Date.now,
        },
    },
    {
        collection : 'user',
    }
)
