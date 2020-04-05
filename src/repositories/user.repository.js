
let _user = null;

class UserRepository {
    constructor({ User }) {
        _user = User;
    }

    async createUser(user) {
        console.log(user);
        console.log("repository");
        return await _user.create(user, {
            fields: ["uuid", "user_name", "password"]
        });
    }

}

module.exports = UserRepository;