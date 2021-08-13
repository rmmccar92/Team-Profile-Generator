const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Manager = require("../lib/manager");
const index = require("../utils/generate");

describe("Creation of the index HTML page." , () =>{
    it("Creates a page based on the info passed from the classes.", () =>{
        const dayCare = new Employee();
        const dayCare = new Manager();
        const dayCare = new Engineer();
        const dayCare = new Intern();
    })
})