
let _user = null;

class UserRepository {
    constructor({User}) {
        _user = User;
    }

    async createUser(user){
        
        return await User.create({ user });
    }

}

module.exports = UserRepository;