const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const {createRouteEstateAd} = require('./routes');

//Config express
const app = express();
const port = 3000;

//Body-Parser
app.use(bodyParser.json());

//Avoid the cors errors
app.use(cors());

//Connection DB with Mongoose
mongoose.connect('mongodb://localhost:27017/IMMO', {useNewUrlParser: true, useUnifiedTopology: true});

//Routes
createRouteEstateAd(app);

//Server
app.listen(port, () => {
    console.log(`Serveur executé sur http://localhost:${port}`);
})