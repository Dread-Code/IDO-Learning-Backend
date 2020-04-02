const container = require("./src/startup/container");
const server = container.resolve("app");
const  { POSTGRES_URI } = container.resolve("config");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(POSTGRES_URI);


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection with DB has been established successfully.')
        server.start();
    }) 
    .catch(console.log);