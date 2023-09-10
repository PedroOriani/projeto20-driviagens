import { conflictError } from "../errors/conflict.js";
import citiesRepositories from "../repostories/cities.repositories.js";

async function create(name) {
    const verifyCity = await citiesRepositories.getCity(name);

    if (verifyCity) throw conflictError("Cidade");
    console.log("service")

    return citiesRepositories.create(name);
    
}

const citiesServices = {
    create
}

export default citiesServices;