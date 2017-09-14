'use strict'

const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        page : {
            type : Schema.Types.ObjectId,
            ref : 'page',
            required : true,
        },
        visitedAt : {
            type : Date,
            default : Date.now,
            required : true,
        },
        visitedBy : {
            type : String,
            required : true,
        },
    },
    {
        collection : 'pagestat',
    }
)
