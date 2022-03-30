const express = require('express')
const app = express()
app.set("port", process.env.PORT || 3000);
const advertisementController = require('./controllers/advertisementController'),
settlementController = require('./controllers/settlementController'),
categoryController = require('./controllers/categoryController'),
subCategoryController = require('./controllers/subCategoryController'),
serviceController = require('./controllers/serviceController'),
requestController = require('./controllers/requestController');



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


// оголошення
app.post('/advertisement/add', advertisementController.add);
app.get('/advertisement/getAll', advertisementController.get);
app.post('/advertisement/deleteAll', advertisementController.deleteAll);

// міста /села
app.post('/settlement/add', settlementController.add);
app.get('/settlement/getAll', settlementController.getAll);

// категорії
app.post('/category/add', categoryController.add);
app.get('/category/getAll', categoryController.getAll);

// підкатегорії
app.post('/subCategory/add', subCategoryController.add);
app.get('/subCategory/getAll', subCategoryController.getAll);

// заявки
app.post('/request/add', requestController.add);
app.get('/request/getAll', requestController.getAll);

// послуги
app.post('/service/add', serviceController.add);
app.get('/service/getAll', serviceController.getAll);

app.post('/advertisement/deleteAll', advertisementController.deleteAll);


app.listen(app.get("port"), () => {
  console.log(`The app listening on port ${app.get("port")}`)
})
