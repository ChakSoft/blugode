'use strict'

const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        title : {
            type : String,
            required : true,
        },
        content : {
            type : String,
            required : true,
        },
        slug : {
            type : String,
            required : true,
        },
        createdAt : {
            type : Date,
            default : Date.now,
        },
        createdBy : {
            type : Schema.Types.ObjectId,
            ref : 'user',
        },
        updatedAt : {
            type : Date,
            default : Date.now,
        },
        updatedBy : {
            type : Schema.Types.ObjectId,
            ref : 'user',
        },
    },
    {
        collection : 'static',
    }
)
