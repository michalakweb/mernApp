const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Database config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('DB connected'))
.catch((error) => console.log(error));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))