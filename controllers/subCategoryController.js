const SubCategory = require("../models/subCategory");

module.exports = {
    add: (req, res) => {
        new SubCategory({name: req.body.name})
            .save()
            .then(() => {
                console.log('-- new subCategory was added')
                res.sendStatus(200)
            })
            .catch(error => {
                console.log(`ERROR: ${error} while adding new subCategory`)
                res.status(500).send(error)
            })
    },
    getAll: (req, res) => {
        SubCategory.find()
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.status(500).send(error);
        })
    },
    delete: (req, res) => {
        const id = req.params.id;
        SubCategory.deleteOne({_id: id})
        .then(() => {
            console.log('adwertisement was deleted');
            res.redirect('https://www.uhelp.uz.ua/wp-admin/admin.php?page=uhelp_api%2Finc%2Fall_field.php');
        })
        .catch(error => {
            console.log(error)
            res.status(500);
        })
    }

}
