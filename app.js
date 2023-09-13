const express = require('express');
const app = express();
const portNum = process.env.portNum || 5000;
require('./server/connection');
const Route = require('./routes/Route');

app.use(express.json({ limit: "10mb", extended: true }));


app.use('/api', Route);

app.listen(portNum, err => {
    if (!err) {
        console.log(`App is running on ${portNum} port!`)
    }
    else {
        console.log(err)
    }
})