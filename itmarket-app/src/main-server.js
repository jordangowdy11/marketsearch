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

// Email
app.post('/send', cors(), (req, res) => {
  const outputData = `
  <p>Hello :slightly_smiling_face:  thank you for you mail. here is an Automaic Reponse</p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
  </ul>
  <h3>What the automatic email Response says</h3>
  <p>${req.body.message}</p>
 `;
 
  let transporter = nodemailer.createTransport({ // node mailer is a module that alows you to send emails
      host: 'smtp.gmail.com', // host is google mail
      port: 465, //Unique server
      secure: false,
      port: 25,
      auth: {
          user: 'luke.rowley101@gmail.com', //the email that will be used to send the response
          pass: ''
      },
      tls: {
          rejectUnauthorized: false
      }
  });
 
  let HelperOptions = {
      from: '"Market Research" <email',
      to: 'luke61084@mastek.com',
      subject: 'Automatic Email Response',
      text: 'hello',
      html: outputData
  };
 
 
    transporter.sendMail(HelperOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("The message was sent!");
        console.log(info);
    });
 
 });



 //listen sits and patiently waits for http requests at defined port above, defined as 8080 atm
 app.listen(port, () => {
  console.log("Spooky mongo magic has begun hsdfsg ⊙﹏⊙");
})