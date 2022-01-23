const { Schema, model } = require('mongoose');

const RoleSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    }
},{
    versionKey: false,
});

module.exports = model('Role', RoleSchema);