const express = require('express');
const app = express();
require("dotenv").config();
const bodyParser = require('body-parser');


const api = process.env.API_URL;




//https://localhost:3000/api/v1
app.get(`${api}products`, (req, res) => {
    const products = {
        id: 1,
        name: "iphone 14",
        image: "image 1",
    }
    res.send("Hello Products");
});
app.post(`${api}products`, (req, res) => {
    const newProduct = req.body
    console.log(products)

    res.send(newProduct);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})