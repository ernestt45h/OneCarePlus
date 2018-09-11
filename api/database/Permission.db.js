var mongoose = require('mongoose');
var settings = require('../config/settings')


const Permission = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sub_name: String,
    access_point: String,
    feature: {
        id: mongoose.Schema.ObjectId,
        name: String
    },
    description: String,
    role: String,
    actions: [{
        type: String,
        enum: ['create', 'read', 'update', 'delete', 'develop']
    }],
    target:{
        type: String,
        enum: settings.users
    },
    is_default: {
        type: Boolean,
        default: false
    },
    dev_id: {type: mongoose.Schema.ObjectId, ref:'user'},
    type: String,
    icon:{
        fa: String,
        mi: String,
        svg: String
    }
})

Permission.pre('save', function(next){
    this.name = this.name.toUpperCase()
    this.sub_name = this.name.toLowerCase()
    if(!this.access_point) {
        const host = require('../config/host')
        this.access_point = host.name + '/' + this.sub_name
    }
    if(!this.role) this.role = 'developer'
    if(!this.target) this.target = 'self'
    if(this.role === 'developer'){
        this.actions = ['create', 'read', 'delete', 'update']
        this.is_default = true
    }
    if(!this.type) this.type = 'navigation'
    

    next()
})

module.exports = mongoose.model('permission', Permission)