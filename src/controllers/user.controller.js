let _userService = null;

class UserController {
    constructor({ UserService }) {
        _userService: UserService;
    }

    async create(req,res){
        const { body } = req;

        const createUser = await _userService.createUser(body);
        return createUser;
    }

}

module.exports = UserController;