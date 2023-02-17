import mongoose from "mongoose";

function connect() {
  const DB_HOST = process.env.DB_HOST;
  const DB_PORT = process.env.DB_PORT;
  const DB_DATABASE = process.env.DB_DATABASE;

  mongoose.set("strictQuery", false);
  mongoose
    .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`)
    .then(() => console.log("DB CONNECTED!"))
    .catch((err) => console.log("DB ERR!", err));
}

export default { connect };
