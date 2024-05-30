import express from "express";

import {
  GetActivity,
  CreateActivities,
  GetActivityById,
} from "../controller/Activities.controller.js";
import { upload } from "../middleware/multer.middleware.js";
const activityRoute = express.Router();

activityRoute.route("/createActivity").post(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  CreateActivities
);
activityRoute.route("/getActivity").get(GetActivity);
activityRoute.route("/getActivityById/:id").get(GetActivityById)

export default activityRoute;
