const Employee = require("./employee");


class Engineer extends Employee {
    constructor(name, id , email, username) {
        super(name, id, email)
        this.username = username;
    }
    getUsername(){
        return this.username;
    }

}


module.exports = Engineer