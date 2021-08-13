const Engineer = require("../lib/engineer");

describe("Engineer class creation", () =>{
    it("handles creation of new Employees that are also Engineers" , () =>{
        const name ="Lary";
        const id = 102;
        const email= "En@example.com";
        const username = "Larydev"

        const engineer = new Engineer(name, id, email, username);

        expect(engineer.name).toEqual(name);
        expect(engineer.id).toEqual(id);
        expect(engineer.email).toEqual(email);
        expect(engineer.username).toEqual(username);
        expect(Engineer.prototype.getRole()).toEqual("Engineer");
    });

})