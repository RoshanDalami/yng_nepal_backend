import express from "express";
import { CreateYlc, GetYlc, GetYlcbyId } from "../controller/ylc.controller.js";
import { upload } from "../middleware/multer.middleware.js";
const YlcRoute = express.Router();

YlcRoute.route("/createYlc").post(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  CreateYlc
);
YlcRoute.route("/getYlc").get(GetYlc);
YlcRoute.route("/getYlcById/:id").get(GetYlcbyId);
export default YlcRoute;
