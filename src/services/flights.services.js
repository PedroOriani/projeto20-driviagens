import { notFoundError } from "../errors/notFound.js";
import fligthRepositories from "../repostories/flights.repositories.js";
import dayjs from "dayjs";
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js';
import { unprocessableEntityError } from "../errors/unprocessableEntity.js";
import { badRequest } from "../errors/badRequest.js";

async function create (origin, destination, date){
    const verifyOrigin = await fligthRepositories.getOrigin(origin);
    const verifyDestination = await fligthRepositories.getDestination(destination);

    if (!verifyOrigin) throw notFoundError("Cidade de Origem");
    if (!verifyDestination) throw notFoundError("Cidade de Destino");

    dayjs.extend(isSameOrBefore);
    const today = dayjs().format('DD-MM-YYYY');

    const todayParts = today.split('-')
    const todayDay = Number(todayParts[0]);
    const todayMonth = Number(todayParts[1] - 1);
    const todayYear = Number(todayParts[2]);

    const parts = date.split('-')
    const day = Number(parts[0]);
    const month = Number(parts[1] - 1);
    const year = Number(parts[2]);

    if (year < todayYear) throw unprocessableEntityError("A data do voo deve ser maior que a data atual");
    if (year === todayYear && month < todayMonth) throw unprocessableEntityError("A data do voo deve ser maior que a data atual");
    if (year === todayYear && month === todayMonth && day <= todayDay ) throw unprocessableEntityError("A data do voo deve ser maior que a data atual");

    return fligthRepositories.create(origin, destination, date);
}

async function read (origin, destination, smallerDate, biggerDate) {

    if ((smallerDate && !biggerDate) || (!smallerDate && biggerDate)) throw unprocessableEntityError("smaller-date e bigger-date devem ser passados juntos");

    if (smallerDate && biggerDate) {
        const smallerParts = smallerDate.split("-")
        const smallerDay = Number(smallerParts[0])
        const smallerMonth = Number(smallerParts[1] - 1)
        const smalleryear = Number(smallerParts[2])

        const biggerParts = biggerDate.split("-")
        const biggerDay = Number(biggerParts[0])
        const biggerMonth = Number(biggerParts[1] - 1)
        const biggeryear = Number(biggerParts[2])

        if (biggeryear < smalleryear) throw badRequest("bigger-date não pode ser menor que smaller-date");
        if (biggeryear === smalleryear && biggerMonth < smallerMonth) throw badRequest("bigger-date não pode ser menor que smaller-date");
        if (biggeryear === smalleryear && biggerMonth === smallerMonth && biggerDay < smallerDay) throw badRequest("bigger-date não pode ser menor que smaller-date");
    }


    const flights = await fligthRepositories.read(origin, destination, smallerDate, biggerDate);

    return flights;
}

const flightServices = {
    create,
    read
}

export default flightServices