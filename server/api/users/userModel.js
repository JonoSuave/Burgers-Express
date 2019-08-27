const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
require('mongoose-type-email');

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
            type: mongoose.SchemaTypes.Email, 
            required: true,
            unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    
      // dont store the password as plain text
    password: {
        type: String,
        required: true
    }
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

UserSchema.methods = {
    // check the passwords on signin
    authenticate: function(plainTextPword) {
        return bcrypt.compareSync(plainTextPword, this.password);
    },
    // hash the passwords
    encryptPassword: function(plainTextPword) {
        console.log('Trying to encrypt signup password');
        if (!plainTextPword) {
        return ''
        } else {
        var salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(plainTextPword, salt);
        }
    }
};

module.exports = mongoose.model('user', UserSchema);