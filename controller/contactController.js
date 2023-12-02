const asyncHandler = require("express-async-handler")

const Contact = require('../models/contactModels')

const getContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.find()
    res.status(200).json(contact)
})

const createContact = asyncHandler(async(req,res)=>{
    console.log(`request body is ${req.body.name}`) 

    const {name,email} = req.body
    if(!name || !email){
        res.status(400)
        throw new Error("All field jaruri")
    }
    const contact = await Contact.create({
        name,
        email,
    })
    res.status(201).json(contact)
})
const getContacts = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    res.status(200).json(contact)
    if(!contact) {
        res.status(400)
        throw new Error("No Contact with id")
    }
})
// update 
const updateContact = asyncHandler(async(req,res)=>{
    console.log(`request body is ${req.params.id}`) 
    const {name,email} = req.body
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(400)
        throw new Error("No contact")
    }

    const updatecontact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(201).json(updatecontact)
})

// delete 
const deleteContact = asyncHandler(async(req,res)=>{
    console.log(`request body is ${req.params.id}`) 
    const {name,email} = req.body
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(400)
        throw new Error("No contact found")
    }

    await Contact.deleteOne();
    res.status(201).json({message:`Delete contact for ${req.params.id}`})
})

module.exports = {getContact,createContact,getContacts,updateContact,deleteContact}