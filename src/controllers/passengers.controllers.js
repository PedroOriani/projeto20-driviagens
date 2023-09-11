import httpStatus from "http-status";
import passengersServices from "../services/passengers.services.js";
import { incompleteDataError } from "../errors/incompleteData.js";

async function create (req, res) {
    const { firstName, lastName } = req.body;

    if (!firstName || !lastName) throw incompleteDataError();

    await passengersServices.create(firstName, lastName);
    res.sendStatus(httpStatus.CREATED);
}

const passengersControllers = {
    create
}

export default passengersControllers