const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username is required']
    },
    address: {
        type: String,
        required: [true, 'address is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    role_id: {
        type: Schema.ObjectId,
        ref: 'Roles',
        required: [true, 'role_Id is required']
    },
    nonce: {
        type: Number,
        required: [true, 'nounce is required'],
        unique: true
    },
    avatar: {
        type: String,
    },
    rewards: {
        type: Number,
        defaultValue: 0 
    },
    favorite_Player: {
        type: Schema.ObjectId,
        ref: 'Avatar'
    }
},{
    versionKey: false,
    timestamps: true,
}
);

module.exports = model('User', UserSchema);