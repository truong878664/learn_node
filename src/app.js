import express from "express";
import * as dotenv from "dotenv";

import * as url from "url";
import configViewEngine from "./config/configViewEngine.js";
import configMiddleWare from "./config/configMiddleWare.js";
import db, { connectMysql } from "./config/database.js";
import route from "./routes/web.js";
import { DataTypes, Model } from "sequelize";

dotenv.config();

export const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();
const port = process.env.PORT || 8080;

import enquirer from 'enquirer';
const { prompt } = enquirer;

const response = await prompt({
  type: "input",
  name: "username",
  message: "what is your username?",
});

console.log(response);

// const sequelize = connectMysql();

// const User = sequelize.define("User", {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: DataTypes.STRING,
//   phone: DataTypes.STRING,
// });

// // const user = await User.create({
// //   name: "truong222",
// //   email: "tq@gmail222.com",
// //   phone: "+84 888 888222",
// // });

// const user = await User.findOne({where: {id: 1}});
// console.log(user.toJSON());

// sequelize
//   .sync()
//   .then(() => {
//     console.log("created table2");
//   })
//   .catch((err) => {
//     console.log("ERR ----", err);
//   });

app.get("/", (req, res) => {
  res.send("hello word");
});
// configMiddleWare(app);
// configViewEngine(app);

// route(app);

// db.connectMongoose();
// == Example learn node ==
// {

// // import jwt from 'jsonwebtoken';
// // const payload = {id: 1234, password: 'hello'}
// // const secretKey = '123h123'
// // const token = jwt.sign(payload, secretKey)
// // console.log(token)

// // jwt.verify(token, secretKey, (err, decoded) => {
// //   if (err) {
// //     console.log('Token không hợp lệ');
// //   } else {
// //     console.log('Token hợp lệ');
// //     console.log(decoded); // Thông tin được giải mã từ JWT
// //   }
// // });

// import passport from "passport";
// import session from "express-session";
// import LocalStrategy from "passport-local";
// import flash from "connect-flash";
// // const LocalStrategy = require('passport-local').Strategy;
// // const session = require('express-session');

// const users = [
//   { id: 1, username: "john_doe", password: "password123" },
//   {
//     id: 2,
//     username: "jane_smith",
//     password: "password456",
//     id: 3,
//     username: "a",
//     password: "a",
//   },
// ];

// passport.use(
//   new LocalStrategy((username, password, done) => {
//     // Kiểm tra thông tin đăng nhập của người dùng
//     const user = users.find((user) => user.username === username);

//     if (!user || user.password !== password) {
//       return done(null, false, { message: "Invalid username or password" });
//     }

//     return done(null, user);
//   })
// );
// passport.serializeUser((user, done) => {
//   console.log(user);
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   const user = users.find((user) => user.id === id);
//   done(null, user);
// });

// app.use(express.urlencoded({ extended: false }));
// app.use(
//   session({
//     secret: "secret_key",
//     resave: false,
//     saveUninitialized: false,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(flash());

// // Đăng nhập
// app.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/dashboard",
//     failureRedirect: "/login",
//     failureFlash: true,
//   })
// );

// function ensureAuthenticated(req, res, next) {
//   if (req.path === "/login") return next();
//   if (req.isAuthenticated()) return next();
//   res.redirect("/login");
// }

// app.use(ensureAuthenticated);

// // Truy cập dashboard
// app.get("/dashboard", (req, res) => {
//   res.send(`
//   <h1>Welcome to the dashboard!</h1>
//   <a href="/home">home</a>
//   <hr/>
//   <a href="/logout">logout</a>
//   `);
// });

// // Truy cập trang đăng nhập
// app.get("/login", (req, res) => {
//   const message = req.flash("error")[0];
//   res.send(`
//   <span>${message || ""}</span>
//   <form action="/login" method="post">
//     <input name="username" placeholder="Username"/>
//     <input name="password" placeholder="Password"/>
//     <input type="submit" value="submit"/>
//   </form>`);
// });

// app.get("/logout", (req, res) => {
//   req.session.destroy(function (err) {
//     // cannot access session here

//     res.redirect("/login");
//   });
// });

// app.get("/home", (req, res) => {
//   res.send(`
//   <h1>home page</h1>
//   <a href='/dashboard'>dashboard</a>
//   <hr/>
//   <a href='/logout'>logout</a>
//   `);
// });
// }
// == End ==

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log("------------------------------");
  console.log("++++++++++++++++++++++++++++++");
  console.log("------------------------------");
});
