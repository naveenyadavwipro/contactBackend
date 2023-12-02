const express = require("express")
const {getContact,createContact,getContacts,updateContact,deleteContact} = require('../controller/contactController')

const routes = express.Router()

routes.route('/').get(getContact)

routes.route('/:id').get(getContacts)

  routes.route('/').post(createContact)

  routes.route('/:id').put(updateContact)

  routes.route('/:id').delete(deleteContact)



  module.exports = routes