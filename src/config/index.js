/*
if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
} else{
    process.env.POSTGRES_URI = "Production DB"
}

module.exports = {

    PORT: process.env.PORT,
    POSTGRES_URI: process.env.POSTGRES_URI,
    APPLICATION_NAME: process.env.APPLICATION_NAME
};
 */

//puerto
process.env.PORT = process.env.PORT || 3000;
//name
process.env.APPLICATION_NAME = process.env.APPLICATION_NAME || "IDO APP"

// enviroment
process.env.NODE_ENV = process.env.NODE_ENV || "dev"

// base de datos
let urlDB;

if (process.env.NODE_ENV == "dev") {

    urlDB = "postgres://postgresadmin:idoDevPASS4!@ispeakdev.cdiszxcifl61.us-east-1.rds.amazonaws.com:5432/postgres";

} else {
    urlDB = "Production postgres"
}


process.env.urlDB = urlDB;


module.exports = {

    PORT: process.env.PORT,
    POSTGRES_URI: process.env.urlDB,
    APPLICATION_NAME: process.env.APPLICATION_NAME
};
