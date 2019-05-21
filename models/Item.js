const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    customerID: {
        type: Number,
        required: true
    },
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    birthday: {
        type: Date
    },
    gender: {
        type: String
    },
    lastContact: {
        type: Date
    },
    customerLifetimeValue: {
        type: Number
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);