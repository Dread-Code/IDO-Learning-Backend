let _userService = null;

class UserController {
    constructor({ UserService }) {
        _userService = UserService;
    }

    async create(req,res){
        const { body } = req;
        console.log(body);
        const createUser = await _userService.createUser({ body });
        return res.send(createUser);// estaba reornando mal 
    }

}

module.exports = UserController;