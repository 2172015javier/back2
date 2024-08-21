const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  nombreComprador: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  totalCompra: { type: Number, required: true },
  fechaCompra: { type: Date, default: Date.now }
});

const Sale = mongoose.model('Sale', saleSchema);
module.exports = Sale;

