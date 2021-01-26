const express = require('express');
const routes = require('./routes');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config({path: './.env'});

const app = express();

const port = process.env.PORT || 8000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", `http://localhost:3000`); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
}); 