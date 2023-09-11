import { tooManyResultsError } from "../errors/tooManyResults.js";
import passengersRepositories from "../repostories/passengers.repositories.js";

async function create (firstName, lastName) {
    return passengersRepositories.create(firstName, lastName);
}

async function read (name) {
    const passengers = await passengersRepositories.read(name);
    console.log(passengers)
    console.log(passengers.length)

    if (passengers.length > 10) throw tooManyResultsError()

    return passengers;
}

const passengersServices = {
    create,
    read
}

export default passengersServices;