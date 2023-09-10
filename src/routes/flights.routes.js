import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.js";
import { flightSchema } from "../schemas/flights.schemas.js";

const flightRouter = Router();

flightRouter.post('/flights', validateSchema(flightSchema), );
flightRouter.get('/flights', );

export default flightRouter;