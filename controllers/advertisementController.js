const Advertisement = require("../models/advertisement");

getAdvertisementParams = body => {
    return {
        title: body.title,
        categoryId: body.categoryId,  
        subCategoryId: body.subCategoryId,
        userId: body.userId,
        cost: body.cost,
        longDescription: body.longDescription,
        shortDescription: body.shortDescription,
        date: Date(),
        userName: userName,
        freePlacesCount: body.freePlacesCount,
        tags: body.tags,
        photo: body.photo,
        settlement: body.settlement,
        phone: body.phone
    };
};

module.exports = {
    add: (req, res) => {
        new Advertisement(getAdvertisementParams(req.body))
            .save()
            .then(() => {
                console.log('-- new adwertisement was added')
                res.redirect('https://www.uhelp.uz.ua/wp-admin/admin.php?page=uhelp_api%2Finc%2Fcreate_post.php&create=yes');
            })
            .catch((error) => {
                console.log(`ERROR: ${error} while adding new adwertisement`)
                res.status(500).send(error)
            });
    },
    get: (req, res) => {
        Advertisement.find()
        .then(data => { 
            res.json(data);
        })
        .catch(error => {
            console.log(error);
            res.status(500);
        })
    },
    deleteAll: (req, res) => {
        Advertisement.remove()
        .then(data => {
            res.send('Всі оголошення видалено');
        })
        .catch(error => {
            console.log(error);
            res.status(500);
        })
    },
    getBySettlement: (req, res) => {
        const settlementName = req.params.settlement;
        Advertisement.find({settlement: settlementName})
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            console.log(error);
            res.status(500);
        })
    },
    getById: (req, res) => {
        const id = req.params.id;
        Advertisement.findById(id)
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            console.log(error)
            res.status(500);
        })
    },

    getByUser: (req, res) => {
        const theUser = req.params.userId;
        Advertisement.find({userId: theUser})
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            console.log(error)
            res.status(500);
        })
    },
    update: (req, res) => {
        const id = req.params.id;
        Advertisement.findByIdAndUpdate(id, getAdvertisementParams(req.body))
        .then(data => {
            console.log('adwertisement was updated');
            res.redirect('https://www.uhelp.uz.ua/wp-admin/admin.php?page=uhelp_api%2Finc%2Fmy_post.php');
        })
        .catch(error => {
            console.log(error)
            res.status(500);
        })
    },

    delete: (req, res) => {
        const id = req.params.id;
        Advertisement.deleteOne({_id: id})
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