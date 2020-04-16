import express from 'express';
const router = express.Router();
const Student = require('../models/Student');


// Get all Students
router.get('/', async (req, res) => {
    try{
        const students = await Student.find(); // mongoose method
        res.json(students);
    } catch (err) {
        res.json({student: err});
    }
});

//Post Student
router.post('/', async (req, res) => {
    const student = new Student({
        Name: req.body.Name,
        Address: req.body.Address,
        Phones: req.body.Phones,
        Studies: req.body.Studies
    });
    try {
        const savedStudent = await student.save();
        res.json(savedStudent);
        console.log(savedStudent);
    }
    catch(err) {
        res.json({student: err});
    }
});

// Get telematica Students
router.get('/telematica', async (req, res) => {
    try{
        const students = await Student.find({"Studies": "telematica"});
        res.json(students);
    } catch (err) {
        res.json({student: err});
    }
});

router.get('/aeros', async (req, res) => {
    try{
        const students = await Student.find({"Studies": "aeros"});
        res.json(students);
    } catch (err) {
        res.json({student: err});
    }
});

router.get('/sistemas', async (req, res) => {
    try{
        const students = await Student.find({"Studies": "sistemas"});
        res.json(students);
    } catch (err) {
        res.json({student: err});
    }
});
module.exports = router;