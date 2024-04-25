const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    name: {
        type: String, 
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
});

const blobSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    color: {
        type: String,
        enum: ['blue', 'green', 'purple', 'orange', 'yellow', 'pink', 'red'],
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    tasks: [taskSchema]
});

const Blob = model('Blob', blobSchema);

module.exports = Blob;