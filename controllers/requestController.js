const Request = require("../models/request");

//  body.nickname - означає, що у формі має бути input з name (nickname)
getRequestParams = body => {
    return {
        nickname: body.nickname,
        email: body.email,  
        phone: body.phone,
        placesCount: body.placesCount,
        shortMesage: body.shortMesage
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
    }
    
}