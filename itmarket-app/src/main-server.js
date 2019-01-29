
const express = require("express");
const app = express();
const port = 8080;

var bodyParser = require("body-parser");

var MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/language_data/:language", (req,res) =>{
  var language = req.param.language;
  var message=""

  MongoClient.connect('mongodb://localhost:27017/language_data', function(err,client){
    if(err) { throw err}
    console.log("Connected on Request");
    var db = client.db("language_data");
    db.collection(language).find().toArray(function(err, result) {
      if (err) throw err
      console.log(message)
      res.send("language is set to "+req.param.language);
    })
  })
})

//simple test request to make sure the server is replying and saying hello
  app.get("/sayhello", (req, res) =>{
    var hello = "Hello There"
    res.send(hello)
  })

    //this function makes a connection the the mongodb
  app.get("/permanent/aws", (req, res) =>{
    MongoClient.connect('mongodb://localhost:27017/language_data', function(err,client){
      if(err) { throw err}
      console.log("Connected on Request");
      var db = client.db("language_data");
      db.collection("perm_aws").find().toArray(function(err, result) {
        console.log(result)
        res.send(result)
      })
    })
  })

  //this function makes a connection the the mongodb
  app.get("/permanent/csharp", (req, res) =>{
    MongoClient.connect('mongodb://localhost:27017/language_data', function(err,client){
      if(err) { throw err}
      console.log("Connected on Request");
      var db = client.db("language_data");
      db.collection("perm_csharp").find().toArray(function(err, result) {
        console.log(result)
        res.snd(result)
      })
    })
  })

 //listen sits and patiently waits for http requests at defined port above, defined as 8080 atm
 app.listen(port, () => {
  console.log("Spooky mongo magic has begun hsdfsg ⊙﹏⊙");
})

