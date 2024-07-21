// src/models/usersModel.js
class Users {
    constructor(id, userName, password, isActive, idRole) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isActive = isActive;
        this.idRole = idRole;
    }
}

export default Users;
