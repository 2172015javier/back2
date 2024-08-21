const Sale = require('../models/sale');

exports.createSale = async (req, res) => {
  const { nombreComprador, totalCompra } = req.body;
  try {
    const sale = new Sale({ nombreComprador, totalCompra });
    await sale.save();
    res.status(201).json(sale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getSales = async (req, res) => {
  try {
    const sales = await Sale.find().populate('nombreComprador', 'username');
    res.json(sales);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};