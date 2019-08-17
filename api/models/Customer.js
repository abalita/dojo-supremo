const mongoose = require('mongoose')

var CustomerSchema = new mongoose.Schema({
    first_name: String,
    middle_name: String,
    last_name: String,
    birth_date: Date,
    gender: String,
    height: String,
    weight:String,
    email: String,
    contact_no: String,
    mobile_no:String,
    address: String,
    classes:[],
    enrollment:String,
    membership_type: String
})

module.exports = mongoose.model("customers", CustomerSchema);