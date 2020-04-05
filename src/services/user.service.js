let _userRepository = null;

class UserService {
    constructor({ UserRepository }) {
        _userRepository = UserRepository;
    }

    async createUser(body) {
        console.log(body);
        console.log("Service");
        let user = {
            user_name: body.userName,
            password: body.password
        }
        console.log(user);
        return await _userRepository.createUser(user, () => {
            return true;
        });
    }

}

module.exports = UserService;