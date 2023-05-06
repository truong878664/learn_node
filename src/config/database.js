import mongoose from "mongoose";
import mysql from "mysql2";

const DB_CONNECTION = process.env.DB_CONNECTION;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_DATABASE = process.env.DB_DATABASE;

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "mvibot_database",
  socketPath: "/var/run/mysqld/mysqld.sock",
});
export const promisePool = pool.promise();

const connectMongoose = () => {
  mongoose
    .connect(`mongodb://127.0.0.1:27017/${DB_DATABASE}`)
    .then(() => console.log("Connected!"))
    .catch((error) => console.log(error));
};

export default { connectMongoose };
