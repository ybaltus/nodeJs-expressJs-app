const express = require('express');
const path = require('path');
const {createRoutesEstateAd} = require('./routes');

//Config
const app = express();
const port = 4000;
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Routes
createRoutesEstateAd(app);

//Server
app.listen(port, "localhost",() => {
    console.log(`Front-End executé sur http://localhost:${port}`);
})
