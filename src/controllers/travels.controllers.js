import httpStatus from "http-status";
import travelService from "../services/travels.services.js";

async function create (req, res) {

    const { passengerId, flightId } = req.body;

    await travelService.create(passengerId, flightId);
    res.sendStatus(httpStatus.CREATED);
}

const travelController = {
    create
}

export default travelController;