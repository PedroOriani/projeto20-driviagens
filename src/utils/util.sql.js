import dayjs from "dayjs";
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js';
import { unprocessableEntityError } from "../errors/unprocessableEntity.js";

function verifyDate(date) {
    dayjs.extend(isSameOrBefore);
    const today = dayjs().format("DD-MM-YYYY");
    const formattedDate = dayjs(date, "DD-MM-YYYY");

    if (formattedDate.isSameOrBefore(today)) throw unprocessableEntityError("A data do voo deve ser maior que a data atual");

    return 0;
}

const utils = {
    verifyDate
}

export default utils;