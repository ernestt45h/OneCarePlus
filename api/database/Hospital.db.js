const mongoose = require('mongoose')



const Hospital = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type:String,
        required: true
    },
    type: String,
    description: String,
    paractices: [{type: mongoose.Schema.ObjectId, ref: 'hopital_practice'}],
    city: String,
    zip: String,
    state: String,
    country: String,
    geolocation: {type: mongoose.Schema.ObjectId, ref: 'geolocation'},

})

module.exports = mongoose.model('hospital', Hospital)