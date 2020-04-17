var mongoose = require('mongoose');

const ResultSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true, 
    },
    // SampleId: { 
    //     type: String,
    //     required: true,
    // },
    Date: { 
        type: Date,
        default: Date.now
    },
    Positive: { // Result
        type: Boolean
    },
    TestType: {
        type: String
    }
    });
module.exports = mongoose.model('Results', ResultSchema);