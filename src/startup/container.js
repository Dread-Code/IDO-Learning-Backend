const { createContainer, asValue, asClass, asFunction } = require("awilix");

const container = createContainer();
//config
const config = require("../config");
const app = require(".");

// services
const {
    HomeService
} = require("../services");

//Controllers
const {
    HomeController
} = require("../controllers");

//Routes
const{
    HomeRoutes
} = require("../routes/index.routes");
const Routes = require("../routes");


container
.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
})
.register({
    HomeService: asClass(HomeService).singleton()
})
.register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
})
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
});

module.exports = container;