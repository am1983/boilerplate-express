var express = require('express');
var app = express();
require('dotenv').config();

// Mount the express.static() middleware to the path /public.
app.use("/public", express.static(__dirname + "/public"));

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
