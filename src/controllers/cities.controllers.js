import httpStatus from "http-status";
import citiesServices from "../services/cities.services.js";

async function create (req, res){

    const { name } = req.body;

    await citiesServices.create(name);
    console.log("controller")
    res.sendStatus(httpStatus.CREATED)
}

const citiesControllers = {
    create
}

export default citiesControllers