const express = require("express");
const Massive = require ('massive');
const axios = require('axios');
require("dotenv").config();

const app = express();

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database Connected");
})

app.get('/api/inventory', productController.getProduct);
app.post('/api/inventory', productController.addProduct);
app.delete('./api/inventory', productController.deleteProduct);



app.use(express.json());



app.listen(5050, () => {
  console.log("Listening on 5050");
});