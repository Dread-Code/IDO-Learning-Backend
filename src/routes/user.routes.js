const { Router } = require("express"); 

module.exports =({UserController}) =>{
    const router = Router();

    router.post("/",UserController.create);
    
    return router; // No estaba retornando este hpta router .l.
}