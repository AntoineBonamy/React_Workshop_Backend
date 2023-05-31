const express = require('express');
const router = require("./routes/routes")
require("dotenv").config();
const app = express();
const port = process.env.APP_PORT ?? 5000;

app.use(express.json());
app.use("/api/character", router);

app.listen(port, (err) => {
    if (err) {
        console.error("Server Error");
    } else {
        console.log(`Server on. Port ${port}`);
    }
})

module.exports = app;