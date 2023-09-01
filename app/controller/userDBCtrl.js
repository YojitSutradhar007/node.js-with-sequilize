const userModel = require('../models/userDatabase')

const addUser = async (req, res, next) => {
    const body=req.body;
    try {
        const result = await userModel.create({ first_name: body.first_name, last_name: body.last_name })

        res.status(200).json({ message: "insertation succesfully", result: result });
    } catch (err) {
        console.log("Error Inserting user " + err.message);
        res.status(500).json({ message: "Insertation failed", Error: err.message });
    }
}

const getUsers = async (req, res, next) => {
    try {
        const result = await userModel.findAll();
        res.status(200).json({ message: "Query succesfully", result: result });
    } catch (err) {
        console.log("Error Inserting user " + err.message);
        res.status(500).json({ message: "Query failed", Error: err.message });
    }
}


module.exports={addUser,getUsers}