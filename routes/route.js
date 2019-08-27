const express = require('express')
const router = express.Router()
const Contact = require('../models/contacts')

// retrieving contacts
router.get('/contacts', (req, res, next) => {
    // res.send('Retrieving the contact list ')
    Contact.find({}, (err, contacts) => {
        res.json(contacts)
    })
})


// add contact
router.post('/contact', (req, res, next) => {

    let newContact = new Contact({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone: req.body.phone
        })
        // console.log(newContact)
    newContact.save().then(contact => res.json(contact)).catch(err => console.log(err))
})

//delete contact
router.delete('/contact/:id', (req, res, next) => {
    Contact.deleteOne({
        _id: req.params.id
    }).then(result => {
        res.json(req.params.id)
    }).catch(err => console.log(err))
})


module.exports = router;