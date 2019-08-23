const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email');

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        preferred: {
            type: mongoose.SchemaTypes.Email, 
            required: true,
            unique: true
        },
    },
    // burgers: [
    //     {ref: 'burger', type: Schema.Types.ObjectId}
    // ],
    // shakes: [
    //     {ref: 'shake', type: Schema.Types.ObjectId}
    // ],
    // fries: [
    //     {ref: 'fry', type: Schema.Types.ObjectId}
    // ]
});

module.exports = mongoose.model('user', UserSchema);