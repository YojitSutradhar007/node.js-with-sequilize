const http=require('http')
const Sequelize =require('sequelize')
const app= require('./server')

const port=7878;

const sequelize = new Sequelize('sequilizeDB', 'postgres', '123456', {
    host:'localhost',
    port_1:'5432',
    dialect: 'postgres',
    logging: false
})


async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connect();

const server=http.createServer(app)


server.listen(port,()=>{
    console.log("Server is running")
})

