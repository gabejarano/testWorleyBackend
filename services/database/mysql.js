const Sequelize = require('sequelize');
const config = require('config');

//conecction of database using sequelize
const sequelize = new Sequelize(
    config.get('mysqlDB.DB'),
    config.get('mysqlDB.USER_DB'),
    config.get('mysqlDB.PASSWORD_DB'),
    {
        host: config.get('mysqlDB.HOST_DB'),
        dialect: 'mysql',
        pool: {
            max: 20,
            min: 0,
            require: 30000,
            idle: 200000,
            acquire: 1000000
        },
        loggin: false
    }
)

sequelize.sync()

module.exports = sequelize;