const express =require('express')
const app =express();
const bodyParser=require('body-parser')
const morgan=require('morgan')
const userRoute=require('./app/routes/userRoute')

app.use(bodyParser.json());// show that which type of data in coming from body 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'))

console.log("inside")

app.use('/',userRoute)

app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error)
});
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    });
});





module.exports=app