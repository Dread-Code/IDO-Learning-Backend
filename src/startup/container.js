const { createContainer, asValue, asClass, asFunction } = require("awilix");

const container = createContainer();
const Routes = require("../routes");

//config
const config = require("../config");
const app = require(".");

// services
const {
    HomeService,
    UserService
} = require("../services");

//Controllers
const {
    HomeController,
    UserController
} = require("../controllers");

//Routes
const{
    HomeRoutes
} = require("../routes/index.routes");


//models
const {
    User
} = require("../models");

//repositories
const {
    UserRepository
} = require("../repositories");


container
.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
})
.register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton()
})
.register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
})
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
})
.register({
    User: asValue(User)
})
.register({
    UserRepository: asClass(UserRepository).singleton()
})

module.exports = container;