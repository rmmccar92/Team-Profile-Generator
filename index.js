const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer')
const writeFileAsync = util.promisify(fs.writeFile);
const generatePage = require("./utils/generate");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


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
                message: 'Email address?'
            },
])
    .then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.office)
    }) 
};

const employeePrompt = () => {
    return inquirer
    .prompt([
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
                message: 'Email address?'
            },

            {
                type: 'list',
                name: 'role',
                message: 'Employee role?',
                choices: ['Engineer', 'Intern'],
            },

           {
               type: 'input',
               name: 'username',
               message: 'Github username?',
               when: (data) => data.role = 'Engineer',
           },

           {
               type: 'input',
               name: 'school', 
               message: 'School name?',
               when: (data) => data.role = 'Intern',
           },

           {
            type: 'confirm',
            name: 'add',
            message: "Add more team members?",
            default: false
        },
        ])
        .then(data => {
            const employee = new `${data.role}`(data.name, data.id, data.email, data.office)
        });
}

const init = () => {
    questions()
        .then((data) => writeFileAsync('index.HTML', generatePage(data)))
        .then(() => console.log('Team Profile Generated'))
        .catch((err) => console.log(err))
}

init();
