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
import manageRoutes from "./router/management.routes.js";
import adviosoryRouter from "./router/advisory.routes.js";

app.use('/news',NewsRoutes)
app.use('/banner',BannerRouter)
app.use('/management', manageRoutes)
app.use('/advisory', adviosoryRouter)


export default app