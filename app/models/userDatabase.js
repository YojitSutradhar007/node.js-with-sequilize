const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequilizeDB', 'postgres', '123456', {
    host: 'localhost',
    port_1: '5432',
    dialect: 'postgres',
    logging: false
})

const UserTable = sequelize.define('userDatabase', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    first_name: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

sequelize.sync();

module.exports=UserTable;