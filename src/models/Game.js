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
                type: String,
                ref: 'User'
            }
        ]
        // ,
        // validate:[arrayValidate, "El usuario ya existe"]
    },
    pivate_player: {
        type: [
            {
                type: String
            }
        ]
        // ,
        // validate:[arrayValidate, "El usuario ya existe"]
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

// function arrayValidate(data){

//    for(let i=0; i<(data.length-1);i++){
//        for(let j=(i+1);j<data.length;j++){
//            if(data[i]===data[j]){
//                return false
//            }
//        }
//    }
//    return true
// }

module.exports = model('Game', GameSchema);