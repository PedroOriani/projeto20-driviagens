import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.js";
import { flightSchema } from "../schemas/flights.schemas.js";
import flightControllers from "../controllers/flights.controllers.js";

const flightRouter = Router();

flightRouter.post('/flights', validateSchema(flightSchema), flightControllers.create);
flightRouter.get('/flights', flightControllers.read);

export default flightRouter;