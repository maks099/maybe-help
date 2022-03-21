const express = require('express')
const app = express()
app.set("port", process.env.PORT || 3000);
const requestController = require('./controllers/requestController');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/maybe_help");

const db = mongoose.connection;
db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/save', requestController.add);
app.get('/get', requestController.get);


app.listen(app.get("port"), () => {
  console.log(`Example app listening on port ${app.get("port")}`)
})
