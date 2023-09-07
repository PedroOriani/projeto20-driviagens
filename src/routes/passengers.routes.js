import { Router } from "express"
import { validateSchema } from '../middlewares/validate.schema.js'
import { passengerSchema } from "../schemas/passengers.schema.js";


const passengerRouter = Router();

passengerRouter.post('/passengers', validateSchema(passengerSchema), );
passengerRouter.get('/passengers/travels', );

export default passengerRouter;