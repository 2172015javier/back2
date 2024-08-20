const User = require('../models/user');

exports.createUser = async (req, res) => {
  const { username, password, role, permissions } = req.body;
  try {
    const user = new User({ username, password, role, permissions });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({ active: true });
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deactivateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, { active: false }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.changeUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, { role }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
