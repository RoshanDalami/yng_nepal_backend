import express from "express";
import { GetManagement,CreateManagement, GetManagementById } from "../controller/management.controller.js";
import { upload } from "../middleware/multer.middleware.js";
const manageRoutes = express.Router()
manageRoutes.route("/getManagement").get(GetManagement);
manageRoutes.route("/createManagement").post(
    upload.fields([
      {
        name: "image",
        maxCount: 1,
      },
    ]),
    CreateManagement
  );
  manageRoutes.route("/getManagementById/:id").get(GetManagementById);

  export default manageRoutes;