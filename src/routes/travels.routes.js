import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.js";
import { travelSchema } from "../schemas/travels.schemas.js";

const travelRouter = Router();

travelRouter.post('./travels', validateSchema(travelSchema), );

export default travelRouter;