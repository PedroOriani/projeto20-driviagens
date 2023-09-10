import passengersRepositories from "../repostories/passengers.repositories.js";

async function create (firstName, lastName) {
    return passengersRepositories.create(firstName, lastName);
}

const passengersServices = {
    create
}

export default passengersServices;