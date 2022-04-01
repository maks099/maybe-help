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
    },

    delete: (req, res) => {
        const id = req.params.id;
        Settlement.deleteOne({_id: id})
        .then(() => {
            console.log('adwertisement was deleted');
            res.redirect('https://www.uhelp.uz.ua/wp-admin/admin.php?page=uhelp_api%2Finc%2Fmy_post.php');
        })
        .catch(error => {
            console.log(error)
            res.status(500);
        })
    }

}
