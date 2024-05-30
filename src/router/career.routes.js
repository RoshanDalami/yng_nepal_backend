import express from 'express'
import {
    CreateCareer,
    GetCareer,
    GetCareerById
} from '../controller/career.controller.js';

const careerRoute = express.Router()

careerRoute.route("/createCareer").post(CreateCareer);
careerRoute.route("/getCareer").get(GetCareer);
careerRoute.route("getCareerByid/:id").get(GetCareerById)



export default careerRoute