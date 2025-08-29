const express = require('express');
const app = express();
require("dotenv").config();


const api = process.env.API_URL;

//https://localhost:3000/api/v1
app.get(api + "/products", (req, res) => {

    res.send("Hello Products");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})