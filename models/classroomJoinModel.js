const mongoose = require('mongoose');

const classroomJoinSchema = new mongoose.Schema({
    classroomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classroom',
        required: true, 
    },
    studentEmail: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    classOwnerEmail: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const ClassroomJoin = mongoose.model('ClassroomJoin', classroomJoinSchema);

module.exports = ClassroomJoin;