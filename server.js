const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const path = require('path');

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

// DBB config
const db = require('./keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db)
.then(() => console.log('mongo db connected'))
.catch((error) => console.log(error))

//Use routes
app.use('/api/items', items)

//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));