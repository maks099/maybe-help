const Request = require("../models/request");

//  body.nickname - означає, що у формі має бути input з name (nickname)
getRequestParams = body => {
    return {
        surname: body.surname,
        name: body.name,
        email: body.email,  
        phone: body.phone,
        userId: body.userId,
        places_count: body.places_count,
        short_mesage: body.short_mesage,
        advertisementId: body.advertisementId
    };
};

module.exports = {
    add: (req, res) => {
        new Request(getRequestParams(req.body))
            .save()
            .then(() => {
                console.log('-- new request was added')
                res.sendStatus(200);
            })
            .catch((error) => {
                console.log(`ERROR: ${error} while adding new request`)
                res.status(500).send(error)
            });
    },
    getAll: (req, res) => {
        Request.find()
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.status(500);
        })
    },

    delete: (req, res) => {
        const id = req.params.id;
        Request.deleteOne({_id: id})
        .then(() => {
            console.log('request was deleted');
            res.send('ok');
        })
        .catch(error => {
            console.log(error)
            res.status(500);
        })
    }
    
}