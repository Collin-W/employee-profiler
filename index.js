const temp = require('./src/template')
const inquirer = require('inquirer')
const fs = require('fs')
const teamArr = []


const Eng = require('./lib/Engineer')
const Int = require('./lib/Intern')
const Mana = require('./lib/Manager')

const menu = function () {
    return inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: 'What would you like to do.',
            choices: ["Add Eng", "Add Int", "Build Team"]
        })
        .then(answer => {
            let choice = answer.choice
            if (choice === 'Add Eng') {
                engPrompt()
            } else if (choice === 'Add Int') {
                intPrompt()
            } else {
                buildTeam()
            }
        })
}

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
        .then(answers => {
const mana = new Mana( answers.name, answers.email, answers.id, answers.officeNum)
            teamArr.push(mana)
            menu()
        })
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
        .then(answers => {
            console.log(answers)
            menu()
        })
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
        .then(answers => {
            console.log(answers)
            menu()
        })
}


const buildTeam = function() {
    fs.writeFileSync('./dist/team.html', temp(teamArr))
}

manaPrompt()


// how to get my template.js file and my constructors connected to this
// how to send this to dist folder? 