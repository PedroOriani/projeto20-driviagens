import { db } from "../database/database.connection.js";

async function create (firstName, lastName) {
    await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`, [firstName, lastName])
}

async function read (name) {
    const passengers = await db.query(`
        SELECT 
            CONCAT ("firstName", ' ', "lastName") AS passenger,
            COUNT ("passengerId") AS travels
        FROM
            passengers
        JOIN
            travels ON travels."passengerId" = passengers.id
        WHERE
            CONCAT ("firstName", ' ', "lastName") ILIKE '%' || $1 || '%'
        GROUP BY
            passenger
        ORDER BY
            travels DESC  
    ;`, [name]);
    return passengers.rows;
}

const passengersRepositories = {
    create,
    read
}

export default passengersRepositories