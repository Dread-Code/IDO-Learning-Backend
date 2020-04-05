const { POSTGRES_URI } = require("../config");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(POSTGRES_URI);

module.exports = {
    sequelize
}