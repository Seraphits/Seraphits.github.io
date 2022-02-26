var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var neo4j = require('neo4j-driver').v1;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Driver to connect to Neo4j database. I am using a sandbox database so if it does not work it's because it's expired.

// var driver = neo4j.driver('bolt://3.95.227.184:7687', neo4j.auth.basic('neo4j', 'slate-information-test'));
const driver = neo4j.driver( 'bolt://3.95.227.184:7687', neo4j.auth.basic('neo4j', 'slate-information-test'))
const session = driver.session()
// Set up routes
app.get('/',function(req, res){
    res.render('index');
});

// Server set up on Port 3000
app.listen(3000);

console.log('Server started on port 3000');
// export to app
module.exports = app;