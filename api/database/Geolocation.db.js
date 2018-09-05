const mongoose = require('mongoose')

const GeoLoc = new mongoose.Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates:{
        type: [Number],
        index: "2dsphere"
    }
})

module.exports = mongoose.model('geolocation', GeoLoc)