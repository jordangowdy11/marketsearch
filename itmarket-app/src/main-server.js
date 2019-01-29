
const express = require("express");
const app = express();
const port = 8080;

var bodyParser = require("body-parser");

var MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/language_data/:language", (req,res) =>{
//   var language = req.param.language;
//   MongoClient.connect('mongodb://localhost:27017/language_data', function(err,client){
//     if(err) { throw err}
//     console.log("Connected on Request");
//     var db = client.db("language_data");

//     db.collection("csharp").find().toArray(function(err, result) {
//       console.log(result)
//       res.send(result);
//     })
//   })
// })

//simple test request to make sure the server is replying and saying hello
  // app.get("/sayhello", (req, res) =>{
  //   var hello = "Hello There"
  //   res.send(hello)
  // })

  //this function makes a connection the the mongodb
  //amazon_aws
  app.get("/permanent/amazon_aws", (req, res) =>{
    MongoClient.connect('mongodb://localhost:27017/language_data', function(err,client){
      if(err) { throw err}
      console.log("Connected on Request");
      var db = client.db("language_data");
      db.collection("amazon_aws").find().toArray(function(err, result) {
        console.log(result)
        res.send(result)
      })
    })
  })
  //csharp
  app.get("/permanent/csharp", (req, res) =>{
    MongoClient.connect('mongodb://localhost:27017/language_data', function(err,client){
      if(err) { throw err}
      console.log("Connected on Request");
      var db = client.db("language_data");
      db.collection("csharp").find().toArray(function(err, result) {
        console.log(result)
        res.send(result)
      })
    })
  })
  //devops
  app.get("/permanent/devops", (req, res) =>{
    MongoClient.connect('mongodb://localhost:27017/language_data', function(err,client){
      if(err) { throw err}
      console.log("Connected on Request");
      var db = client.db("language_data");
      db.collection("devops").find().toArray(function(err, result) {
        console.log(result)
        res.send(result)
      })
    })
  })
  //html
  app.get("/permanent/html", (req, res) =>{
    MongoClient.connect('mongodb://localhost:27017/language_data', function(err,client){
      if(err) { throw err}
      console.log("Connected on Request");
      var db = client.db("language_data");
      db.collection("html").find().toArray(function(err, result) {
        console.log(result)
        res.send(result)
      })
    })
  })
  //java
  app.get("/permanent/java", (req, res) =>{
    MongoClient.connect('mongodb://localhost:27017/language_data', function(err,client){
      if(err) { throw err}
      console.log("Connected on Request");
      var db = client.db("language_data");
      db.collection("java").find().toArray(function(err, result) {
        console.log(result)
        res.send(result)
      })
    })
  })
  //javascript
  app.get("/permanent/javascript", (req, res) =>{
    MongoClient.connect('mongodb://localhost:27017/language_data', function(err,client){
      if(err) { throw err}
      console.log("Connected on Request");
      var db = client.db("language_data");
      db.collection("javascript").find().toArray(function(err, result) {
        console.log(result)
        res.send(result)
      })
    })
  })
  //microsoft
  app.get("/permanent/microsoft", (req, res) =>{
    MongoClient.connect('mongodb://localhost:27017/language_data', function(err,client){
      if(err) { throw err}
      console.log("Connected on Request");
      var db = client.db("language_data");
      db.collection("microsoft").find().toArray(function(err, result) {
        console.log(result)
        res.send(result)
      })
    })
  })
  //python
  app.get("/permanent/python", (req, res) =>{
    MongoClient.connect('mongodb://localhost:27017/language_data', function(err,client){
      if(err) { throw err}
      console.log("Connected on Request");
      var db = client.db("language_data");
      db.collection("python").find().toArray(function(err, result) {
        console.log(result)
        res.send(result)
      })
    })
  })
  //scrum
  app.get("/permanent/scrum", (req, res) =>{
    MongoClient.connect('mongodb://localhost:27017/language_data', function(err,client){
      if(err) { throw err}
      console.log("Connected on Request");
      var db = client.db("language_data");
      db.collection("scrum").find().toArray(function(err, result) {
        console.log(result)
        res.send(result)
      })
    })
  })
  //sql
  app.get("/permanent/sql", (req, res) =>{
    MongoClient.connect('mongodb://localhost:27017/language_data', function(err,client){
      if(err) { throw err}
      console.log("Connected on Request");
      var db = client.db("language_data");
      db.collection("sql").find().toArray(function(err, result) {
        console.log(result)
        res.send(result)
      })
    })
  })


 //listen sits and patiently waits for http requests at defined port above, defined as 8080 atm
 app.listen(port, () => {
  console.log("Spooky mongo magic has begun hsdfsg ⊙﹏⊙");
})

