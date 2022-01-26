const { Schema, model } = require('mongoose');

const NftsSchema = new Schema({
    rarity: {
        type: Schema.ObjectId,
        ref: 'Rarity',
        required: [true, 'rarity id is required']
    },
    token: {
        type: Number,
        required: [true, 'Token is required'],
        unique: true
    },
    owner: {
        type: Schema.ObjectId,
        ref: 'User',
        required: [true, 'Token is required']
    }
},{
    versionKey: false,
    timestamps: true,
}
);

module.exports = model('Nfts', NftsSchema);