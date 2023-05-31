// Main page 

const express = require('express'); // call express (npm install express)
const router = require("./routes/routes") // import routes file, which containes all roads
require("dotenv").config(); // call dotenv to use .env file
const app = express();
const port = process.env.APP_PORT ?? 5000; // call port

app.use(express.json()); // convert response in json format (postman)
app.use("/api/character", router); // launch routes in app

app.listen(port, (err) => {
    if (err) {
        console.error("Server Error");
    } else {
        console.log(`Server on. Port ${port}`);
    }
}) // initialize server