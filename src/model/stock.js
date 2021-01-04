const mongoose = require('mongoose');

const stocks = mongoose.Schema({
    name : {
        type: String
    },
    exchange: {
        type: String
    },
    price: {
        type: Number
    },
    volume: {
        type: Number
    }
});

module.exports = mongoose.model('stock', stocks, 'stocks');