const express = require('express')
const bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/bookStore';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
require('./Models/models').init();
var SearchBL = require('./searchBL')
const port = 4000
 
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.static("public"));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

app.post('/MostSearched/', (req, res, next) => {
    SearchBL.getMostSearched(function(cb){
        res.send(cb);
    })
})
app.post('/Search/', (req, res, next) => {
    SearchBL.search(req.body, function(cb){
        res.send(cb);
    })
})

app.post('/Lookup/', (req, res, next) => {
    SearchBL.lookup(req.body, function(cb){
        res.send(cb);
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))