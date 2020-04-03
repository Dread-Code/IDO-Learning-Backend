
let _user = null;

class UserRepository {
    constructor({ User }) {
        _user = User;
    }

    async createUser(user){
        console.log(user);
        const { uuid, user_name, password} = user.body;
        return await _user.create({ uuid, user_name, password},{
            fields: ["uuid", "user_name", "password"]
        });
    }

}

module.exports = UserRepository;