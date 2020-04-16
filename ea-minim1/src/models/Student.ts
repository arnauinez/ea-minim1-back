var mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true, 
    },
    Address: {
        type: String,
        required: true,
    },
    Phones: { 
        type: Array,
        required: true
    },
    Studies: {
        type: Array
    }
    });
module.exports = mongoose.model('Students', StudentSchema);