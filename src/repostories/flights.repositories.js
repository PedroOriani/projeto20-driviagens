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
    console.log(date)
    await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`, [origin, destination, date]);
}

async function read (origin, destination, smallerDate, biggerDate) {

    const params = []

    let query =
        `SELECT
            flights.id, 
            city1.name AS origin, 
            city2.name AS destination, 
            to_char(flights.date, 'DD-MM-YYYY') AS date
        FROM
            flights
        JOIN
            cities AS city1 ON city1.id = flights.origin
        JOIN
            cities AS city2 ON city2.id = flights.destination`

    if (origin) {
        query += ` WHERE city1.name = $1`
        params.push(origin)
    }

    if (destination) {
        query += origin ? ` AND city2.name = $2` : `WHERE city2.name = $1`
        params.push(destination)
    }

    if (smallerDate && biggerDate) {
        if (origin || destination){
            query += ` AND flights.date >= $${params.length + 1} AND flights.date <= $${params.length + 2}`;
        }else{
            query += ` WHERE flights.date >= $1 AND flights.date <= $2`
        }
        params.push(smallerDate, biggerDate)
    }

    query += ` ORDER BY flights.date;`;

    const flights = await db.query(query, params)

    return flights.rows
}

const fligthRepositories = {
    getOrigin,
    getDestination,
    create,
    read
}

export default fligthRepositories