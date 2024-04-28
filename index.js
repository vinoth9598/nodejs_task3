const mentorRouter = require('./controller/mentor')
const studentRouter = require('./controller/student')

const express = require('express');
const app = express();

require('dotenv').config();

const cors = require('cors');
app.use(cors());  /* To avoid cross origin error */

app.use(express.json());  

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

const mongoose = require('mongoose');

mongoose.connect(MONGODB_URI)
    .then(()=>{
        console.log('Connected to Mongodb');
    })
    .catch(()=>{
        console.log("Error connecting to mongodb");
    })


app.use('/Mentors',mentorRouter);
app.use('/Students',studentRouter);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
