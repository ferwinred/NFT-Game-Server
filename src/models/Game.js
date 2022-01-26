const { Schema, model } = require('mongoose');

const GameSchema = new Schema({
    creator: {
        type: Schema.ObjectId,
        ref: 'User',
        required: [true, 'creator is required']
    },
    players: {
        type: [
            {
                type: Schema.ObjectId,
                ref: 'User'
            }
        ],
    },
    pivate_player: {
        type: [
            {
                type: String
            }
        ],
    },
    rewards: {
        type: Number,
        required: [true, 'rewards is required']
    }
},{
    versionKey: false,
    timestamps: true,
}
);

module.exports = model('Game', GameSchema);