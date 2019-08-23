const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShakeSchema = new Schema({
    shake: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
});

module.exports = mongoose.model('shake', ShakeSchema);