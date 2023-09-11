import { db } from "../database/database.connection.js";

async function getOrigin (origin){
    const city = await db.query(`SELECT * FROM cities WHERE id=$1;`, [origin]);
    return city.rows[0];
}

async function getDestination (destination){
    const city = await db.query(`SELECT * FROM cities WHERE id=$1;`, [destination]);
    return city.rows[0]; 
}

async function create (origin, destination, date) {
    await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`, [origin, destination, date]);
}

const fligthRepositories = {
    getOrigin,
    getDestination,
    create
}

export default fligthRepositories