const express = require('express')
const app = express()
const port = 3990

var bodyparser= require("body-parser")
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//1
var MongoClient = require('mongodb').MongoClient

// COS-Cross Origin Request Support: Allowing access to limited or all types of request

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
"Origin, X-Requsted-With, Content-Type, Accept");
res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
next();
})

app.get('/', (req, res) => {
    var message="Welcome to the Python Application";
})
// Format of express Web API Methods
//<app-name>.<http-method>(<URL-path>,(req,res)=>{ business logic for processing response})

// http://localhost:3990/projects/list/61084
// /projects/list/:path-variable-name
app.get('',(req,res)=> {
})
// http://localhost:3990/projects/delete/61084/123
app.delete(
)

// listen: Host the API on a specified Port
app.listen(port, () =>{})
