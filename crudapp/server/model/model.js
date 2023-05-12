const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    matricule : {
        type : String,
        required: true
    },
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

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;