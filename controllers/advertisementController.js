const Advertisement = require("../models/advertisement");

getAdvertisementParams = body => {
    return {
        title: body.title,
        categoryId: body.categoryId,  
        subCategoryId: body.subCategoryId,
        userId: body.userId,
        cost: body.cost,
        description: body.description,
        date: Date(),
        freePlacesCount: body.freePlacesCount,
        tags: body.tags
    };
};

module.exports = {
    add: (req, res) => {
        new Advertisement(getAdvertisementParams(req.body))
            .save()
            .then(() => {
                console.log('-- new adwertisement was added')
                res.sendStatus(200);
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
            res.status(500);
        })
    }
    
}