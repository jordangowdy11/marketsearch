const express = require("express");
const app = express();
const port = 3400;
const spawn = require("child_process").spawn;

var cors = require('cors')
var bodyParser = require("body-parser");
var MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

function runScriptEveryMonth(){
  var process = spawn('python',["apc.py"]);
  var monthDay = new Date().getDate();
  if(monthDay == 2){
    process.stdout.on('data',(data) => {
      console.log(data);
      console.log("Python script executed via ExpressJS on Node.JS application")
    })
  } else {
    console("Python only executed on the 2nd of every month")
  }
}
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