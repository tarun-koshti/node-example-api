const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '100kb', extended: true }))



app
    .route('/')
    .get((req, res, next) => {
        res.status(200).json({
            message: 'Hello you are on the get api.'
        });
    })
    .post((req, res, next) => {
        res.status(200).json({
            message: 'Hello you are on the post api. your data is',
            data: req.body
        });
    });

app.all('**', (req, res, next) => {
    res.status(404).json({
        message: 'This route is not present.'
    });
});

app.use((error, req, res, next) => {
    res.status(500).json({
        message: error.message
    });
});

const db = "mongodb+srv://admin:3bMUAfj61Mvxn4EY@cluster0.yrrjd.mongodb.net/node-test";
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}!`);
});
