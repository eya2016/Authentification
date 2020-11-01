const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('config');

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// DB Config
const db = config.get('mongoURI');

// Connect to mongo
mongoose
        .connect(db , 
        {   
            useNewUrlParser: true , 
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        .then(()=> console.log("mongoDB Connected..."))
        .catch(err => console.log(err))

// Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 5000;


app.listen(port , ()=>console.log(`server started on the port ${port}`));