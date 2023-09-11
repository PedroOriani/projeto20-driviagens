import { db } from "../database/database.connection.js";

async function create (firstName, lastName) {
    await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`, [firstName, lastName])
}

const passengersRepositories = {
    create
}

export default passengersRepositories