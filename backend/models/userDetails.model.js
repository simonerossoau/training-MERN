const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userDetailsSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    name: { type: String },
    surname: { type: String },
    position: { type: String },
    description: {type:String},
    photoUri: { type: String },
}, {
    timestamps: true
});

const UserDetails = mongoose.model('UserDetails', userDetailsSchema);

module.exports = UserDetails;