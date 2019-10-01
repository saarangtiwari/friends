const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config()

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
});

// Map to Routes file
require('./routes/main_route')(app);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
try {
    mongoose
        .connect(db, { useNewUrlParser: true })
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));

} catch (err) { console.error(err) };


// Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

app.use((err, req, res, next) => {
    console.log('Error Message : ' + err.stack);
    res.status(err.status || 500).send({
        success: "false",
        msg: err.message,
        data: []
    });
});
