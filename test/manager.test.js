const Manager = require("../lib/manager");

describe("Manager class creation", () =>{
    it("handles creation of new Employees that are also Engineers" , () =>{
        const name ="Mark";
        const id = 100;
        const email= "M@example.com";
        const office = 4

        const manager = new Manager(name, id, email, office);

        expect(manager.name).toEqual(name);
        expect(manager.id).toEqual(id);
        expect(manager.email).toEqual(email);
        expect(manager.office).toEqual(office);
        expect(Manager.prototype.getRole()).toEqual("Manager");
    });

})