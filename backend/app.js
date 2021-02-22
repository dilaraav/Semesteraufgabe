const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
var router = require('./routes/routes');

const app = express();
global.__basedir = __dirname;

// parse requests of content-type: application/json
app.use(bodyParser.json());

// enable cors for all requests
app.use(cors());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

// include the routers
router(app);


// set port, listen for requests
app.listen(4000, () => {
    console.log("Server is running on port 4000.");
});