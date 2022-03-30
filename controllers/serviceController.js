const Service = require("../models/service");

getServiceParams = body => {
    return {
        name: body.name,
        sequenceNumber: body.sequenceNumber
    };
};

module.exports = {
    add: (req, res) => {
        new Service(getServiceParams(req.body))
            .save()
            .then(() => {
                console.log('-- new service was added')
                res.sendStatus(200);
            })
            .catch((error) => {
                console.log(`ERROR: ${error} while adding new service`)
                res.status(500).send(error)
            });
    },
    getAll: (req, res) => {
        Service.find()
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.status(500);
        })
    }
    
}