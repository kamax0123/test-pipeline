const express = require('express');
const port = process.env.port || 5000;
const app =  express();

app.get('/', (req, res) => {
    res.send('App Working!');
});

app.listen(port, () => {
    console.log("The App is running");
});

module.exports = app;