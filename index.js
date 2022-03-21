const express = require('express')
const app = express()
const port = 3000
const requestController = require('./controllers/requestController');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1/maybe_help", {useNewUrlParser: true});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/save', requestController.add);
app.get('/get', requestController.get);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
