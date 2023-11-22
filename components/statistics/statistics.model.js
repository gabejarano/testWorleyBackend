const Sequelize = require('sequelize');
const sequelize = require('../../services/database/mysql');

//model of the table Statistic
const Statistic = sequelize.define('statistics', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    filtro1: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    filtro2: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    filtro3: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    filtro4: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Statistic;