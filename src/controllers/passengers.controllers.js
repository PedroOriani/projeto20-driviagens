import httpStatus from "http-status";
import passengersServices from "../services/passengers.services.js";
import { incompleteDataError } from "../errors/incompleteData.js";

async function create (req, res) {
    const { firstName, lastName } = req.body;

    if (!firstName || !lastName) throw incompleteDataError();

    await passengersServices.create(firstName, lastName);
    res.sendStatus(httpStatus.CREATED);
}

async function read (req, res) {

    const name = req.query.name || "";

    console.log(`name: ${name}`);

    const passengers = await passengersServices.read(name);

    res.status(httpStatus.OK).send(passengers)

}

const passengersControllers = {
    create,
    read
}

export default passengersControllers