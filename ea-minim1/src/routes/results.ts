import express, { Application, Request, Response, NextFunction} from 'express';
import { runInNewContext } from 'vm';
const router = express.Router();
const Result = require('../models/Result');


// Get all Results
router.get('/', async (req, res) => {
    try{
        const results = await Result.find(); // mongoose method
        res.json(results);
    } catch (err) {
        res.json({result: err});
    }
});

//Post Result
router.post('/', async (req, res) => {
    const result = new Result({
        Name: req.body.Name,
        SampleId: req.body.SampleId,
        Positive: req.body.Positive,
        TestType: req.body.TestType
    });
    try {
        const savedResult = await result.save();
        res.json(savedResult);
        console.log(savedResult);
    }
    catch(err) {
        res.json({result: err});
    }
});

router.post('/edit', async (req, res) => {
    const result = new Result({
        Name: req.body.Name,
        SampleId: req.body.SampleId,
        Positive: req.body.Positive,
        TestType: req.body.TestType
    });
    try {
        await Result.remove({_id: req.body._id});
        const savedResult = await result.save();
        res.json(savedResult);
        console.log(savedResult);
    }
    catch(err) {
        res.json({result: err});
    }
})

// router.patch('/:id', async (req, res) => {
//     try {
//         const results = await Result.findById(req.params.id); // mongoose method
//         // res.json(results);

//         const removedResult = await Result.remove({_id: req.params.raceId})
//         // res.json(removedResult);
//         const result = new Result({
//             Name: req.body.Name,
//             Positive: req.body.Positive,
//             TestType: req.body.TestType
//         });
//             const savedResult = await result.save();
//             res.json(savedResult);
//             console.log(savedResult);
//         }
//     catch(err) {
//         res.json({result: err});
//     }
// });

// Get telematica Students
// router.get('/telematica', async (req, res) => {
//     try{
//         const results = await Result.find({"Studies": "telematica"});
//         res.json(results);
//     } catch (err) {
//         res.json({result: err});
//     }
// });

// router.get('/aeros', async (req, res) => {
//     try{
//         const students = await Result.find({"Studies": "aeros"});
//         res.json(students);
//     } catch (err) {
//         res.json({student: err});
//     }
// });

// router.get('/sistemas', async (req, res) => {
//     try{
//         const students = await Result.find({"Studies": "sistemas"});
//         res.json(students);
//     } catch (err) {
//         res.json({student: err});
//     }
// });
module.exports = router;