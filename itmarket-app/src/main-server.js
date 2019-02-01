const express = require("express");
const app = express();
const port = 3400;

var cors = require('cors')
var bodyParser = require("body-parser");
var MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

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

//parameterised function that works for all requests to the mongodb
app.get("/language_data/mongoquery/:data", (req,res) => {
  // console.log(req.param('data'))
  MongoClient.connect('mongodb://localhost:27017/language_data', function(err, client){
    if(err){throw err}
    console.log("Connected on Request");
    var db = client.db("language_data");
    db.collection(req.param("data")).find().toArray(function(err, result){
      console.log(result)
      res.send(result)
    })  
  })
})



 //listen sits and patiently waits for http requests at defined port above, defined as 8080 atm
 app.listen(port, () => {
  console.log("Spooky mongo magic has begun hsdfsg ⊙﹏⊙");
})