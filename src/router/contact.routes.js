import express from 'express'
import {
    CreateContact,
    GetContactById,
    Getcontact
} from '../controller/contact.controller.js'

const contactRoute = express.Router();

contactRoute.route("/createContact").post(CreateContact)
contactRoute.route("/getContact").post(Getcontact)
contactRoute.route("/getContactById/:id").post(GetContactById)

export default contactRoute


