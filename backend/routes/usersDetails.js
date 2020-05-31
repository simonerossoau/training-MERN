const router = require('express').Router();
let UserDetails = require('../models/userDetails.model');

router.route('/').get((req, res) => {
    UserDetails.find()
        .then(users => res.json(users))
        .catch(res => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const surname = req.body.surname;
    const position = req.body.position;
    const description = req.body.description;
    const photoUri = req.body.photoUri;

    const newUser = new UserDetails({
        username,
        name,
        surname,
        position,
        description,
        photoUri
    });

    newUser.save()
        .then(() => res.json('User details added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router;