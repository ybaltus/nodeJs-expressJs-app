const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estateAdSchema = new Schema({
    titre: String,
    description: String,
    adresse: String,
    code_postal: Number,
    ville: String,
    price: Number,
});

const EstateAd = mongoose.model('estateAd', estateAdSchema);

module.exports = EstateAd;