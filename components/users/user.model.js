const Sequelize = require('sequelize');
const sequelize = require('../../services/database/mysql');

//model of the table users
const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    passwordSalt: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = User;