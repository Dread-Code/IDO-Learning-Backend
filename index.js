const container = require("./src/startup/container");
const server = container.resolve("app");
const  { sequelize } = container.resolve("sequilize");




sequelize
    .authenticate()
    .then(() => {
        console.log('Connection with DB has been established successfully.')
        server.start();
    }) 
    .catch(console.log);