const user = require('../models/user');
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
    const users = await User.find({ estado: true });
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deactivateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.findByIdAndUpdate(id, {estado:false});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  res.status(403).json({
    msg: 'directiva funciona ok',
    id,

  });
};

exports.changeUserRole = async (req, res) => {
  const { id } = req.params;
  const { role1 } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, { role:role1 });
    res.status(403).json({
      msg: 'directiva funciona ok',
      id,
      role1
  
    })
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  ;
};
 