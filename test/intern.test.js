const Intern = require("../lib/intern");

describe("Intern class creation", () =>{
    it("handles creation of new Employees that are also Engineers" , () =>{
        const name ="Mary";
        const id = 104;
        const email= "I@example.com";
        const school = "UNC";

        const intern = new Intern(name, id, email, school);

        expect(intern.name).toEqual(name);
        expect(intern.id).toEqual(id);
        expect(intern.email).toEqual(email);
        expect(intern.school).toEqual(school);
        expect(Intern.prototype.getRole()).toEqual("Intern");
    });

})