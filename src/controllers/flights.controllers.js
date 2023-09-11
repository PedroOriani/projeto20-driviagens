import httpStatus from "http-status";
import { differentCities } from "../errors/differentCities.js"
import flightServices from "../services/flights.services.js";

async function create (req, res) {
    const { origin, destination, date } = req.body;

    if ( origin === destination ) throw differentCities();

    await flightServices.create(origin, destination, date);
    res.sendStatus(httpStatus.CREATED);
}

const flightControllers = {
    create
}

export default flightControllers