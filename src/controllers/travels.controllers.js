import travelService from "../services/travels.services";

async function create (passengerId, flightId) {

    const { passengerId, flightId } = req.body;

    return travelService.create(passengerId, flightId);
}

const travelController = {
    create
}

export default travelController;