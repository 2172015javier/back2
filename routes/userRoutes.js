const express = require('express');
const { createUser, getUsers, deactivateUser, changeUserRole } = require('../controllers/userController');
const{check} = require('express-validator');
const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.delete('/:id',[
    // check('id', 'No es un ID valido').isMongoId()
], deactivateUser);
router.patch('/:id/:role1', changeUserRole);

module.exports = router;
