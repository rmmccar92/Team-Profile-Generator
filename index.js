const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer')
const writeFileAsync = util.promisify(fs.writeFile);
const generatePage = require("./utils/generate");


const questions = () => {
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
                type: 'checkbox',
                name: 'more',
                message: 'Add additional team members?',
                choices: ['Engineer', 'Intern'],
                when: (data) => data.add === true,
            },

            {
                type: 'input',
                name: 'engName',
                message: 'Engineer name?',
                when: (data) => data.more === 'Engineer',
            },
            {
                type: 'input',
                name: 'intName',
                message: 'Intern name?',
                when: (data) => data.more === 'Intern',
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