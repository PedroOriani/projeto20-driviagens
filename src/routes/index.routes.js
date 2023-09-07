import { Router } from "express";
import passengerRouter from "./passengers.routes.js";
import cityRouter from "./cities.routes.js";
import flightRouter from "./flights.routes.js";
import travelRouter from "./travels.routes.js";

const indexRouter = Router();

indexRouter.use(passengerRouter);
indexRouter.use(cityRouter);
indexRouter.use(flightRouter);
indexRouter.use(travelRouter);


export default indexRouter;