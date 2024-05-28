import { GetNews, CreateNews , NewsById,DeleteNews } from "../controller/news.controller.js";
import express from "express";
import { upload } from "../middleware/multer.middleware.js";
const NewsRoutes = express.Router();

NewsRoutes.route("/getNews").get(GetNews);
NewsRoutes.route("/deleteNews/:id").delete(DeleteNews)
NewsRoutes.route("/getNewsById/:id").get(NewsById);
NewsRoutes.route("/createNews").post(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  CreateNews
);

export default NewsRoutes;
