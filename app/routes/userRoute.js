const router = require('express').Router();
const userCtrl = require('../controller/userDBCtrl')
const checkToken = require('../middleware/check_auth')


router.post('/signUp', userCtrl.signUpUser);


router.post('/login', userCtrl.loginUser);

router.get('/checkToken', checkToken.checkAuth);



module.exports = router;