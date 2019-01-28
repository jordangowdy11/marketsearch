const express = require("express");
const app = express();
const port = 8080;

var MongoClient = require('mongodb').MongoClient

var bodyParser = require("body-parser");



app.get("/Javascript", (req, res) => {
    console.log("Getting Javascript data")
    MongoClient.connect('mongodb://localhost:27017/language_data/', function(err, client){
        if(err) throw err
        var db = client.db('language_data');

        db.collection('js_data').find().toArray(function(results) {
            console.log(results)
        })
        res.send(results)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))