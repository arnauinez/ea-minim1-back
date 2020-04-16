import express from 'express';
const router = express.Router();
const Subject = require('../models/Subject');
const Student = require('../models/Student');
const mongoose = require('mongoose');


// Get all subjects
router.get('/', async (req, res) => {
    try{
        const subjects = await Subject.find();
        res.json(subjects);
    } catch (err) {
        res.json({subject: err});
    }
});
// Subject detail
router.get('/:name', async (req, res) => {
    try{
        const subjects = await Subject.find({"Name": req.params.name}).populate("Students");
        res.json(subjects);
    } catch (err) {
        res.json({subject: err});
    }
});

// Post Subject
router.post('/', async (req, res) => {
    console.log('___________________');
    console.log(req.body);
    console.log('___________________');

    // const students: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Student"       
    // }[] = [];

    const subject = new Subject({
        Name: req.body.Name,
        Students: req.body.Students
    });
    try {
        const savedSubject = await subject.save();
        res.json(savedSubject);
        console.log(savedSubject);
    }
    catch(err) {
        res.json({subject: err});
    }
});

module.exports = router;