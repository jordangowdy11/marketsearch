const express = require('express')
const app = express()
const port = 3990
var bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//var MongoClient = require('mongodb').MongoClient

// var langData = {
//     language:'Python',
//         statistics:[
//             {2019:10,2018:20,2017:30},
//             {2019:20,2018:30,2017:40}
//         ]
// }


app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content Type, Accept");
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    next();
})

app.get('/',(req,res)=>{
    var message="Welcome to itmarket-app!"
    res.send(message)
    console.log(message)
})

app.get('/permanent/list/js_data',(req,res) => {
    var language = req.params.language
    var message =""
    
<<<<<<< HEAD
    MongoClient.connect('mongodb://localhost:27017/js_data',
        function (err,client){
            if(err) throw err

        var db = client.db('language_date')
=======
    MongoClient.connect('mongodb://localhost:27017/language_data',
        function (err,client){
            if(err) throw err

        var db = client.db('language_data')
>>>>>>> 95dd3035e246db7c6da777371e8c504de11f4542

        db.collection('permanent').find("{language"+language+"}")
        .toArray(function(err,result){
            if(err) throw err

        var permanent = result[0].permanent;
        message="Data for language: "+language
        console.log(language)
        console.log(message)
        res.send(language)
        })

    })
})

app.listen(port, () =>{
    console.log("IT Market App listening on port ${port}!");
    console.log("Startup Logic");
})