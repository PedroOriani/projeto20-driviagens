import httpStatus from "http-status";
import passengersServices from "../services/passengers.services.js";

async function create (req, res) {
    const { firstName, lastName } = req.body;

    await passengersServices.create(firstName, lastName);
    res.sendStatus(httpStatus.CREATED);
}

const passengersControllers = {
    create
}

export default passengersControllers