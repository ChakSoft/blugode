'use strict'

const { Schema } = require('mongoose')

const PublicationStatus = require('./enum/publication-status')

module.exports = new Schema(
    {
        title : {
            type : String,
            required : true,
        },
        slug : {
            type : String,
            required : true,
        },
        content : {
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
            ref : 'user,',
        },
        publicationStatus : {
            type : String,
            enum : PublicationStatus,
        },
        seo : {
            title : {
                type : String,
            },
            description : {
                type : String,
            },
            keywords : {
                type : String,
            },
        },
    },
    {
        collection : 'page',
    }
)
