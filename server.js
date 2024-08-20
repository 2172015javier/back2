const express = require('express');
const mongoose = require('mongoose');
const { dbConexion } = require("./dataBase/config");
require('dotenv').config();

const app = require('./app');

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB conectado'))
//   .catch(err => console.error(err));

dbConexion();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
