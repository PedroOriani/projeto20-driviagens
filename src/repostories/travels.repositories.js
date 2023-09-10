import { db } from "../database/database.connection.js";

async function getPassenger (id) {
    const passenger = await db.query(`SELECT * FROM passengers WHERE id=$1;`, [id]);
    return passenger.rows[0];
}

async function getFlight (id) {
    const flight = await db.query(`SELECT * FROM flights WHERE id=$1;`, [id]);
    return flight.rows[0];
}

async function create (passengerId, flightId) {
    await db.query(`INSERT INTO travels (passengerId, flightId) VALUES ($1, $2);`, [passengerId, flightId]);       
}

const travelRepository = {
    getPassenger,
    getFlight,
    create
}

export default travelRepository