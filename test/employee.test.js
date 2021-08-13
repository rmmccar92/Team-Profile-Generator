const Employee = require("../lib/employee");

describe("Employee super class creation", () =>{
    it("handles creation of new Employees" , () =>{
        const name ="Bob";
        const id = 101;
        const email= "example@example.com"

        const employee = new Employee(name, id, email);

        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);
        expect(Employee.prototype.getRole()).toEqual("Employee");
    });

})