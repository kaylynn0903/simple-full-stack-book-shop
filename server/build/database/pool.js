"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const pool = mysql2_1.default
    .createPool({
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    password: process.env.MYSQL_ROOT_PASSWORD,
    user: process.env.MYSQL_USER,
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
exports.default = pool;
