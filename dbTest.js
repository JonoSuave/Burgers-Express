const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://burgers:burgers@express-burgers-y6ob4.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

const FrySchema = new mongoose.Schema({
    fry: String,
    description: String,
    price: String
});

const Fry = mongoose.model('fry', FrySchema);
Fry.create({
    fry: 'The Asian Wanna Cajun',
    description: 'Oriental spice dipped with Southern sass',
    price: '$3.48'
}).then(function(err, fry) {
    console.log(err, fry);
});