const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// set up express app
const app =express();

// connest to mongodb
mongoose.connect('mongodb://127.0.0.1/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());


// initialize routes
app.use('/api',routes);

// error handling middleware
app.use(function(err, req, res, next){
  // console.log(err);
  res.status(422).send({error: err.message})
})

// handling requests
// app.get('/',(req,res)=>{
//  res.send('hello from express');
// });

// listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests');
} )
