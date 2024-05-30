import express from 'express';
import {
CreateMedia,
GetMedia,
GetMediaById
} from '../controller/media.controller.js'
import { upload } from '../middleware/multer.middleware.js';

const mediaRouter = express.Router()

mediaRouter.route("/createMedia").post(  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),CreateMedia)
mediaRouter.route("/getMedai").get(GetMedia)
mediaRouter.route("/getMediaById/:id").get(GetMediaById)
export default mediaRouter