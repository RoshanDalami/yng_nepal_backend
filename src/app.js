import * as dotenv from "dotenv";
dotenv.config({
  path: './.env'
});
import express from "express";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
import NewsRoutes from "./router/new.routes.js";
import BannerRouter from "./router/banner.routes.js";


app.use('/news',NewsRoutes)
app.use('/banner',BannerRouter)


export default app