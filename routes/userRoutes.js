const express = require('express');
const { createUser, getUsers, deactivateUser, changeUserRole } = require('../controllers/userController');

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.patch('/:id/deactivate', deactivateUser);
router.patch('/:id/role', changeUserRole);

module.exports = router;
