import express from 'express'
import {
    CreateContact,
    GetContactById,
    Getcontact
} from '../controller/contact.controller.js'

const contactRoute = express.Router();

contactRoute.route("/createContact").post(CreateContact)
contactRoute.route("/getContact").get(Getcontact)
contactRoute.route("/getContactById/:id").get(GetContactById)

export default contactRoute


