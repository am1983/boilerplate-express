var express = require('express');
var app = express();

// Mount the express.static() middleware to the path /public.
app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    let path = __dirname + '/views/index.html';
    res.sendFile(path);
});

app.get('/json', (req, res) => {
    var data = {
        "message": "Hello json"
    };

    if (process.env.MESSAGE_STYLE==='uppercase')
    {
        data.message.toUpperCase();
    }

    res.json(data);
});



































 module.exports = app;
