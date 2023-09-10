import { db } from "../database/database.connection.js";

async function getCity(name) {
    const city = await db.query(`SELECT * FROM cities WHERE name=$1;`, [name]);
    console.log("repository1")
    return city.rows[0];
}

async function create(name) {
    await db.query(`INSERT INTO cities (name) VALUES ($1);`, [name])
    console.log("repository2")
}

const citiesRepositories = {
    getCity,
    create
}

export default citiesRepositories;