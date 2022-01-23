const { Schema, model } = require('mongoose');

const QuestionSchema = new Schema({
    game_id: {
        type: Schema.ObjectId,
        ref: 'Game',
        required: [true, 'Game_id is required']
    },
    answers: {
        type: [{
            type: String
        }],
    },
    correct_ans: {
        type: String,
        required: [true, 'correct answer is required'],
    }
},{
    versionKey: false,
    timestamps: true,
}
);

module.exports = model('Question', QuestionSchema);