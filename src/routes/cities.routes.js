import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.js";
import { citySchema } from "../schemas/cities.schemas.js";
import citiesControllers from "../controllers/cities.controllers.js";

const cityRouter = Router();

cityRouter.post('./cities', validateSchema(citySchema), citiesControllers.create);

export default cityRouter;