const express = require('express');
const mongoose = require('mongoose');
const { dbConexion } = require("./dataBase/config");
require('dotenv').config();

const app = require('./app');

dbConexion();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
