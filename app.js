const express = require('express');
const userRoutes = require('./routes/userRoutes');
const saleRoutes = require('./routes/saleRoutes');

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/sales', saleRoutes);

module.exports = app;
