const mongoose = require('mongoose');
const ClassroomSchemas = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    description: {
        type: String,
        trim: true,
    },
    students: [String],
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }]
}, { timestamps: true });

const Classroom = mongoose.model('Classroom', ClassroomSchemas);
module.exports = Classroom;