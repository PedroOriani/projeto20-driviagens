import travelService from "../services/travels.services.js";

async function create () {

    const { passengerId, flightId } = req.body;

    return travelService.create(passengerId, flightId);
}

const travelController = {
    create
}

export default travelController;