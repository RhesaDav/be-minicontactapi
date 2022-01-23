const express = require('express')
const router = express.Router()
const contacts = require('../model/contact')

router.post('/contacts', function (req, res) {
    contacts.createContact(req, res)
})

router.get('/contacts', function (req,res) {
    contacts.getAllContact(req,res)
})

router.get('/contacts/:id', function(req, res) {
    contacts.getOneContact(req,res)
})

router.delete('/contacts/:id', function(req,res) {
    contacts.deleteContact(req, res)
})

router.put('/contacts/:id', function(req,res) {
    contacts.editContact(req,res)
})

module.exports = router