const { Schema, model } = require('mongoose');

const AvatarSchema = new Schema({
    rarity: {
        type: String,
        required: [true, 'rarity id is required']
    },
    Token: {
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

module.exports = model('Avatar', AvatarSchema);