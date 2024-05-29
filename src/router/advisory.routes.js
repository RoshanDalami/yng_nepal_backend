import express from "express"
import { GetAdvisory, CreateAdvisory } from "../controller/Advisory.controller"

const adviosoryRouter = express.Router()

adviosoryRouter.route("/getAdvisory").get(GetAdvisory)
adviosoryRouter.route("/createAdvisory").post(
    upload.fields([
      {
        name: "image",
        maxCount: 1,
      },
    ]),
    CreateAdvisory
  );

  export default adviosoryRouter