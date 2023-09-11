import httpStatus from "http-status";
import { differentCities } from "../errors/differentCities.js"
import flightServices from "../services/flights.services.js";

async function create (req, res) {
    const { origin, destination, date } = req.body;

    if ( origin === destination ) throw differentCities();

    await flightServices.create(origin, destination, date);
    res.status(httpStatus.CREATED).send(date);
}

async function read (req, res) {

    const { origin, destination } = req.query;

    const smallerDate = req.query["smaller-date"];
    const biggerDate = req.query["bigger-date"];

    const flights = await flightServices.read(origin, destination, smallerDate, biggerDate);

    res.status(httpStatus.OK).send(flights);
}

const flightControllers = {
    create,
    read
}

export default flightControllers