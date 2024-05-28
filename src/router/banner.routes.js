import express from "express";
import {
  GetActiveBanner,
  GetAllBanner,
  CreateBanner,
  DeleteBanner
} from "../controller/banner.controller.js";
import { upload } from "../middleware/multer.middleware.js";
const BannerRouter = express.Router();
BannerRouter.route("/getAllBanner").get(GetAllBanner);
BannerRouter.route("/getActiveBanner").get(GetActiveBanner);
BannerRouter.route("/deleteBanner/:id").delete(DeleteBanner)
BannerRouter.route("/createBanner").post(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  CreateBanner
);
export default BannerRouter;
