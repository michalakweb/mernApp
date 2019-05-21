const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    name: {
        first: {
            type: String
        },
        last: {
            type: String
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