const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        max: 40
    },
    lastName: {
        type: String,
        required: true,
        max: 40
    },
    userName: {
        type: String,
        required: false,
        max: 40
    },
    email: {
        type: String,
        required: true,
        max: 40
    },
    age: {
        type: Number,
        required: true,
        max: 1000
    },
    password: {
        type: String,
        required: true,
        max: 20
    },
    answerTo3Questions: {
        question1: {
            type: String,
            required: false,
            max: 30
        },
        question2: {
            type: String,
            required: false,
            max: 30
        },
        question3: {
            type: String,
            required: false,
            max: 30
        },
        answer1: {
            type: String,
            required: false,
            max: 30
        },
        answer2: {
            type: String,
            required: false,
            max: 30
        },
        answer3: {
            type: String,
            required: false,
            max: 30
        }
    },
    birthDate: {
        type: Date,
        required: false
    },
    nickName: {
        type: String,
        required: false,
        max: 20
    }
});

module.exports = mongoose.model('customer_users', UserSchema);