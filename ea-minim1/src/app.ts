import express, { Application, Request, Response, NextFunction} from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
require('dotenv').config();
const app: express.Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Everything is Ok');
});

//Import Routes
const studentRoute = require('./routes/students');
const subjectRoute = require('./routes/subjects');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/std', studentRoute);
app.use('/sbj', subjectRoute);


// Connect to DB
mongoose.connect( 
    String(process.env.DB_CONNECTION),
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => { 
        console.log('Connected to DB!');
        console.log(String(process.env.DB_CONNECTION));
    }
);

app.listen(3700, () => console.log('Server Running'));