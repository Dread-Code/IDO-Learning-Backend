let _userRepository = null;

class UserService {
    constructor({ UserRepository }) {
        _userRepository = UserRepository;
    }

    async createUser(user){
        console.log(user);
        return await _userRepository.createUser(user);
    }

}

module.exports = UserService;