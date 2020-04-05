let _userService = null;

class UserController {
    constructor({ UserService }) {
        _userService = UserService;
    }

    async create(req, res) {
        const body = req.body;
        console.log(body);
        console.log("Controller");
        let message = { message: "ok" };
        const result = await _userService.createUser(body);

        if (result) {
            return res.send(message);
        }
    }
}

module.exports = UserController;