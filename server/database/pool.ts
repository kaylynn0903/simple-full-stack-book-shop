import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    password: process.env.MYSQL_ROOT_PASSWORD,
    user: "root",
    database: process.env.MYSQL_DATABASE,
    connectionLimit: Number(process.env.MYSQL_CONNECTIONLIMIT),
    maxIdle: Number(process.env.MYSQL_MAXIDLE),
    idleTimeout: Number(process.env.MYSQL_IDLETIMEOUT),
    waitForConnections: Boolean(process.env.MYSQL_WAITFORCONNETIONS),
    queueLimit: Number(process.env.MYSQL_QUEUELIMIT),

    // host: "localhost",
    // port: 3306,
    // password: "p@ssword",
    // user: "root",
    // database: "bookshelf",
  })
  .promise();

// pool.on("error", (err: Error, _client: any) => {
//   console.log(`DB Pool Error:\n${err.message}\n${err.stack}`);
// });

export default pool;
