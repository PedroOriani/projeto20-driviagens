import { Router } from "express"
import { validateSchema } from '../middlewares/validate.schema.js'
import { passengerSchema } from "../schemas/passengers.schema.js";
import passengersControllers from "../controllers/passengers.controllers.js";


const passengerRouter = Router();

passengerRouter.post('/passengers', validateSchema(passengerSchema), passengersControllers.create);
passengerRouter.get('/passengers/travels', passengersControllers.read);

export default passengerRouter;