const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    address : {
        type : String,
        required: true
    },
    gender : String,
    telephone : String
})

const Supplierdb = mongoose.model('supplierdb', schema);

module.exports = Supplierdb;