const userModel = require('../models/userDatabase')
const router = require('express').Router();
const userCtrl = require('../controller/userDBCtrl')

router.post('/', userCtrl.addUser);


router.get('/', userCtrl.getUsers)


module.exports = router;