const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer')
const writeFileAsync = util.promisify(fs.writeFile);
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const assignCards = require('./utils/generate');
const teamArr = []

const managerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Team manger name?'
            },

            {
                type: 'input',
                name: 'id',
                message: 'Employee ID?'
            },

            {
                type: 'input',
                name: 'office',
                message: 'Office Number?'
            },

            {
                type: 'input',
                name: 'email',
                message: 'Email address?',
                default: () => {},
                validate: function (email) {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log(".  Please enter a valid email")
                        return false;
                    }
                }
            },

            {
                type: 'confirm',
                name: 'add',
                message: "Add more team members?",
                default: false
            },
        ])
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.office)
            teamArr.push(manager);
        })
};

const employeePrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Employee role?',
                choices: ['Engineer', 'Intern'],
            },

            {
                type: 'input',
                name: 'name',
                message: 'Name?'
            },

            {
                type: 'input',
                name: 'id',
                message: 'Employee ID?'
            },

            {
                type: 'input',
                name: 'email',
                message: 'Email address?',
                default: () => {},
                validate: function (email) {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log(".  Please enter a valid email")
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'username',
                message: 'Github username?',
                when: (data) => data.role === 'Engineer',
            },

            {
                type: 'input',
                name: 'school',
                message: 'School name?',
                when: (data) => data.role === 'Intern',
            },

            {
                type: 'confirm',
                name: 'add',
                message: "Add more team members?",
                default: false
            },
        ])
        .then(data => {
            const { name, id, email, username, school, role, add, } = data;
            let employee;
            if (role === "Engineer") {
                employee = new Engineer(name, id, email, username);
            }
            else if (role === "Intern") {
                employee = new Intern(name, id, email, school);
            }
            teamArr.push(employee);
            if (add === true) {
                // module.exports = team
                return employeePrompt()
            }
            else {
                // console.log(team);
                return teamArr;
            }

        })
};


const init = () => {
    managerPrompt()
        .then(employeePrompt)
        .then(() => writeFileAsync('./dist/index.html', assignCards(teamArr)))
        .then(() => console.log('Team Profile Generated'))
        .catch((err) => console.log(err))
}

init()
