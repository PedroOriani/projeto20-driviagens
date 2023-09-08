import { notFoundError } from "../errors/notFound";
import travelRepository from "../repostories/travels.repositories.js";

async function create (passengerId, flightId) {

    const passenger = await travelRepository.getPassenger(passengerId);
    if (!passenger) throw notFoundError("Passageiro");

    const flight = await travelRepository.getFlight(flightId);
    if (!flight) throw notFoundError("vôo");

    return travelRepository.create(passengerId, flightId);
}

const travelService = {
    create
}

export default travelService;