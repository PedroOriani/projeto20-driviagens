import DateExtension from '@joi/date';
import JoiImport from 'joi';
const Joi = JoiImport.extend(DateExtension);

export const flightSchema = Joi.object({
    origin: Joi.number().integer().required(),
    destination: Joi.number().integer().required(),
    date: Joi.date().format('DD-MM-YYYY').utc().required()
})