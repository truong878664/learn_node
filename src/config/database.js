import mongoose from "mongoose";
import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();


const DB_CONNECTION = process.env.DB_CONNECTION;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_DATABASE = process.env.DB_DATABASE;

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mvibot_database',
  port: 3306,
});

connection.connect();

connection.query("SELECT * FROM bookmark", function (err, results) {
  console.log(results);
  console.log(err); // fields contains extra meta data about results, if available
});

 export default { connection };
