var mongoose = require('mongoose');

const SubjectSchema = mongoose.Schema({
    Name: {type:String, required: true},
    // Students: [{ 
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Student"
    // }]
    Students: { type: Array }
  });
module.exports = mongoose.model('Subjects', SubjectSchema);