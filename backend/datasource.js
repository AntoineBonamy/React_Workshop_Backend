require("dotenv").config(); // call dotenv (npm install dotenv)
const mysql = require ("mysql2/promise"); // call mysql (npm install mysql2)

// create a Pool to initialize db. It needs to create .env file

const datasource = mysql.createPool({
    host: process.env.DB_HOST, // address of the server
    port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the APP_PORT !
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

// launch connection to database

datasource
  .getConnection()
  .then(() => {
    console.log("Can reach database");
  })
  .catch((err) => {
    console.error(err);
  });

// and export

  module.exports = datasource;