const { Schema, model } = require('mongoose');

const RaritySchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    wildcard: {
        type: Array,
    }
},{
    versionKey: false,
}
);

module.exports = model('Rarity', RaritySchema);