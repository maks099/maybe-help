const Settlement = require("../models/settlement");

module.exports = {
    add: (req, res) => {
        new Settlement({name: req.body.name})
            .save()
            .then(() => {
                console.log('-- new settlement was added')
                res.sendStatus(200)
            })
            .catch(error => {
                console.log(`ERROR: ${error} while adding new settlement`)
                res.status(500).send(error)
            })
    },
    getAll: (req, res) => {
        Settlement.find()
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.status(500).send(error);
        })
    }

}
