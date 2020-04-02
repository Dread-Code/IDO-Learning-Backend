if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}
module.exports = {
    PORT: process.env.PORT,
    POSTGRES_URI: process.env.POSTGRES_URI,
    APPLICATION_NAME: process.env.APPLICATION_NAME
};