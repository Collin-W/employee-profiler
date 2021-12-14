const temp = require('./src/template')
const inquirer = require('inquirer')
const fs = require('fs')
const teamArr = []

const emp = require('./lib/Employee')
const eng = require('./lib/Engineer')
const int = require('./lib/Intern')
const mana = require('./lib/Manager')

const manaPrompt = function () {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'Enter manager name'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter manager id'
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Enter office number'
        }
    ])
}

const engPrompt = function () {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'Enter engineer name'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter id'
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Enter GitHub'
        }
    ])
}

const intPrompt = function () {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'Enter intern name'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter id'
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Enter school'
        }
    ])
}