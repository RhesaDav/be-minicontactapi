const express = require('express')
const router = express.Router()
const contacts = require('../model/contact')

router.get('/', function (req, res) {
    res.json ({status: 200, payload: 'API ready'})
})

router.get('/contacts', function (req, res) {
    contacts.getAll(req, res)
})

module.exports = router