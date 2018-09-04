var mongoose = require('mongoose')

const User = mongoose.Schema({
    details:{
        name: {
            first: {
                type: String,
                required: true,
                lowercase: true,
                trim: true
            },
            last: {
                type: String,
                required: true
            },
            other: String
        },
        gender:{
            type: String,
            enum: ['male','female', 'both', 'unknown'],
            default: 'unknown'
        },
        date_of_birth:{
            type: Date,
            required: true
        },
        profile_image: String,
    },
    credentials:{
        info:{
            email: {
                type: String,
                // unique: true,
                // index: true
            },
            username:{
                type: String,
                // unique: true,
                // index: true
            },
            address: String,
            phone: String,
            role:{
                type: String,
                enum: ['patient', 'admin', 'doctor', 'nurse', 'pharmacist'],
                default: 'patient'
            }
        
        },
        password: String},
    status: {
        type: String,
        enum: ['inactive','active','suspended','deleted'],
        default: 'inactive'
    },
    permissions: [
        {type: mongoose.Schema.ObjectId, ref: 'permission'}
    ],
})

module.exports = mongoose.model('user', User)