const Request = require("../models/requests");


module.exports = {
    add: (req,res) => {
        new Request({text: "teska pavlo will go by the russian military ship"}).save();
        res.send(200);
    },
    get: (req, res) => {
        Request.find()
        .then(data => {
            res.json(data[0]);
        })
        .catch(error => {
            res.status(500);
        })
    }
    
}