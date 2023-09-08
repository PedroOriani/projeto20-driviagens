import citiesServices from "../services/cities.services";

async function create (req, res){

    const { name } = req.body;

    return citiesServices.create
}

const citiesControllers = {
    create
}

export default citiesControllers