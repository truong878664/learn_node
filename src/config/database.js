import mongoose from "mongoose";
import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node_js",
  socketPath: "/var/run/mysqld/mysqld.sock",
});
export const promisePool = pool.promise();

const connectMongoose = async () => {
  try {
    mongoose.set("strictQuery", false)
    mongoose.connect(MONGO_URL, () => {
      console.log("Connected!");
    });
  } catch (error) {
    console.log(error);
  }
};

export default { connectMongoose };
