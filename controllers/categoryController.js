const Category = require("../models/category");

module.exports = {
    add: (req, res) => {
        new Category({name: req.body.name})
            .save()
            .then(() => {
                console.log('-- new category was added')
                res.sendStatus(200)
            })
            .catch(error => {
                console.log(`ERROR: ${error} while adding new category`)
                res.status(500).send(error)
            })
    },
    getAll: (req, res) => {
        Category.find()
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.status(500).send(error);
        })
    }

}
