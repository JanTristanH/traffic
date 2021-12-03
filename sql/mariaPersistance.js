import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    connectionLimit: 5
});

const getPlacerholderQuestionmarks = (string) => {
    let s = "?"
    let count = string.split(",").length;
    for (let i = 0; i < count - 1; i++) {
        s = s + ", ?"
    }
    return s;
};

const tableNameRoutes = 'traveltime';
const fieldListRoutes = "location_from,location_to,duration,distance,traveltimeLoss";



let persist = (data, coordinates) => {
    return new Promise((resolve, reject) => {


        async function asyncFunction(array) {
            let conn;
            try {
                conn = await pool.getConnection();

                const res = await conn.query(`INSERT IGNORE INTO ${tableNameRoutes}(${fieldListRoutes}) VALUES (${getPlacerholderQuestionmarks(fieldListRoutes)})`, array);
                console.log("affected Rows: ", res.affectedRows);
                resolve(data);

            } catch (err) {
                conn.rollback();
                throw err;
            } finally {
                if (conn) conn.release(); //release to pool
            }
        }

        //von Hamburg nach eisdorf
        //TODO make this smarter
        asyncFunction([1, 2, data.routes[0].duration, data.routes[0].distance, data.traveltimeLoss])


    })
}

export {
    persist
}