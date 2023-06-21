import mongoose from "mongoose";
import mysql from "mysql2";
import dotenv from "dotenv";
import Sequelize from "sequelize";
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node_js",
  socketPath: "/var/run/mysqld/mysqld.sock",
});
const promisePool = pool.promise();

const connectMongoose = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(MONGO_URL, () => {
      console.log("Connected!");
    });
  } catch (error) {
    console.log(error);
  }
};

const connectMysql = () => {
  // const sequelize = new Sequelize("node_js", "mvibot", "Mvibot@v1", {
  //   socketPath: "/var/run/mysqld/mysqld.sock",
  //   dialect: "mysql",
  // });

  const sequelize = new Sequelize({
    dialect: 'mysql',
    username: 'mvibot',
    password: 'Mvibot@v1',
    database: 'node_js',
    dialectOptions: {
      socketPath: '/var/run/mysqld/mysqld.sock',
    }
  });
  return sequelize;
};

export { promisePool, connectMysql };
export default { connectMongoose };
