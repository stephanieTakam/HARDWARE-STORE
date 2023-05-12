const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nameclient : {
        type : String,
        required: true
    },
    nameproduct : {
        type : String,
        required: true
    },
    code : {
        type: String,
        required: true,
        unique: true
    },
    total : {
        type : String,
        required: true
    },
    date : {
        type : String,
        required: true
    },
    price : {
        type : String,
        required: true
    },
    quantity : {
        type : String,
        required: true
    },
})

const Saledb = mongoose.model('saledb', schema);

module.exports = Saledb;