const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer')
const writeFileAsync = util.promisify(fs.writeFile);
const generatePage = require("./utils/generate");

const Manger = require("./lib/manager");
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
])
    .then
};

const engineerPrompt = () => {
    return inquirer
    .prompt([
            {
                type: 'input',
                name: 'username',
                message: 'Github username?'
            },

            {
                type: 'input',
                name: 'email',
                message: 'Email address?'
            },

            {
                type: 'confirm',
                name: 'add',
                message: 'Add engineer or intern?',
            },

            {
                type: 'list',
                name: 'more',
                message: 'Add additional team members?',
                choices: ['Engineer', 'Intern'],
                when: (data) => data.add === true,
            },


        ])
}

const init = () => {
    questions()
        .then((data) => writeFileAsync('index.HTML', generatePage(data)))
        .then(() => console.log('Team Profile Generated'))
        .catch((err) => console.log(err))
}

init();

module.exports = questions