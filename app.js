const express = require('express')
const app = express()
app.set("port", process.env.PORT || 3000);
const advertisementController = require('./controllers/advertisementController');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/maybe_help");
mongoose.connection.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('It`s an API for maybe help project!\n Creators: Hodanic P., Granich D. and unrecognized person')
})

app.post('/advertisement/add', advertisementController.add);
app.get('/advertisement/getAll', advertisementController.get);



app.listen(app.get("port"), () => {
  console.log(`The app listening on port ${app.get("port")}`)
})
