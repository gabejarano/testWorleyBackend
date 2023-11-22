require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { routes } = require('./components');


//Initialization
const app = express();


//Logs in console
app.use(morgan('dev'));

//Server can receive json 
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


//enable cors
app.use(cors());


//Routing
app.use('/api', routes)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.status(404).send({ "error": "Ruta no encontrada" })
});

// handle error, print stacktrace
app.use(function (err, req, res, next) {
    console.log(err)
    res.status(500).send({ "error": 'Something broke!' });
});

module.exports = app;