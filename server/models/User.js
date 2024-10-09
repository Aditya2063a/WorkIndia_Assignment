let users = {};

class User {
    constructor(user_id, username, password) {
        this.user_id = user_id;
        this.username = username;
        this.password = password; // In a real application, you would hash this!
    }

    // Static method to register a new user
    static register(username, password) {
        const user_id = Object.keys(users).length + 1;
        const newUser = new User(user_id, username, password);
        users[username] = newUser;
        return newUser;
    }

    // Static method to find a user by username
    static findByUsername(username) {
        return users[username];
    }
}

module.exports = User;
