const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BurgerSchema = new Schema({
    burger: {
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

module.exports = mongoose.model('burger', BurgerSchema);