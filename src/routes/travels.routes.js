import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.js";
import { travelSchema } from "../schemas/travels.schemas.js";
import travelController from "../controllers/travels.controllers.js";

const travelRouter = Router();

travelRouter.post('/travels', validateSchema(travelSchema), travelController.create);

export default travelRouter;