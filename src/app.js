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
import careerRoute from "./router/career.routes.js";
import activityRoute from "./router/activity.routes.js";
import YlcRoute from "./router/ylc.routes.js";
import mediaRouter from "./router/media.routes.js";
import contactRoute from "./router/contact.routes.js";

app.use('/news',NewsRoutes)
app.use('/banner',BannerRouter)
app.use('/management', manageRoutes)
app.use('/advisory', adviosoryRouter)
app.use('/career',careerRoute)
app.use("/activity",activityRoute)
app.use("/ylc",YlcRoute)
app.use('/mediaRouter',mediaRouter)
app.use("/contact",contactRoute)

export default app