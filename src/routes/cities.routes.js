import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.js";
import { citySchema } from "../schemas/cities.schemas.js";

const cityRouter = Router();

cityRouter.post('./cities', validateSchema(citySchema));

export default cityRouter;