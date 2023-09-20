const userModel = require('../models/userDatabase')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const signUpUser = (req, res, next) => {
    const body = req.body;
    try {
        bcrypt.hash(body.password, 10, function l̥(err, hash) {

            if (err) {

                res.status(400).json({ message: "Bad Request", success: false, });
            }
            if (hash) {
                userModel.UserCredential.create({ email: body.email, password: hash }).then((result) => {
                    res.status(201).json({ message: "insertation succesfully", success: true, result: result });
                });
            }
        });




    } catch (err) {
        console.log("Error Inserting user " + err.message);
        res.status(500).json({ message: "Insertation failed", Error: err.message });
    }
}

const loginUser = async (req, res, next) => {
    try {
        const result = await userModel.UserCredential.findOne({ where: { email: req.body.email } }).then((result) => {
            // res.status(200).json({ message: "Login Successfully", success: true ,result: result});


            bcrypt.compare(req.body.password, result.password, function (err, passSuccess) {
                if (err) {
                    res.status(403).json({ message: "UnAuthorised User", success: false, Error: err.message });

                }
                if (passSuccess) {
                    const jwtToken = jwt.sign({ email: req.body.email }, "secret", { expiresIn: "4h" });

                    res.status(200).json({ message: "Login Successfully", success: true, result: result, token: jwtToken });
                }
                return res.status(401).json({ message: "Auth Failure", success: false });

            });
        });

    } catch (err) {
        console.log("Error logging user " + err.message);
        res.status(500).json({ message: "Login failed", Error: err.message });
    }
}


module.exports = { signUpUser, loginUser }