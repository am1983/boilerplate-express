var express = require('express');
var app = express();
require('dotenv').config();

// Mount the express.static() middleware to the path /public.
app.use("/public", express.static(__dirname + "/public"));

app.get('/:word/echo', (req, res, next) => {
    res.send({
        echo: req.params.word
    });
});

app.route('/name').get((req, res, next) => {
    const firstName = req.query.first || '';
    const lastName = req.query.last || '';

    res.send({
        name: `${firstName} ${lastName}`
    });
}).post((req, res, next) => {
    // Post.
});

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.send({ time: req.time });
});

app.use((req, res, next) => {
    var method = req.method;
    var path = req.path;
    var ip = req.ip;

    console.log(`${method} ${path} - ${ip}`);
    next();
});

app.get('/', (req, res) => {
    let path = __dirname + '/views/index.html';
    res.sendFile(path);
});

app.get('/json', (req, res) => {

    var message = "Hello json";

    if (process.env.MESSAGE_STYLE==='uppercase')
    {
        message = message.toUpperCase();
    }

    var data = {
        "message": message
    };

    res.json(data);
});



































 module.exports = app;
