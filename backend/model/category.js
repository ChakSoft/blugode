'use strict'

const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        name : {
            type : String,
            required : true,
        },
        slug : {
            type : String,
            required : true,
        },
        enabled : {
            type : Boolean,
            default : true,
        },
        createdAt : {
            type : Date,
            default : Date.now,
        },
    },
    {
        collection : 'category',
    }
)