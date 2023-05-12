const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    code : {
        type: String,
        required: true,
        unique: true
    },
    details : {
        type : String,
        required: true
    },
    price : String,
    quantity : String
})

const Productdb = mongoose.model('productdb', schema);

module.exports = Productdb;