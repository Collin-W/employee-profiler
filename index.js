const temp = require('./src/template')
const inquirer = require('inquirer')
const fs = require('fs')
const teamArr = []


const Eng = require('./lib/Engineer')
const Int = require('./lib/Intern')
const Mana = require('./lib/Manager')

const menu = async function () {
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'What would you like to do.',
        choices: ["Add Eng", "Add Int", "Build Team"]
    })
    let choice = answer.choice
    if (choice === 'Add Eng') {
        engPrompt()
    } else if (choice === 'Add Int') {
        intPrompt()
    } else {
        buildTeam()
    }
}

const manaPrompt = async function () {

    const answers = await inquirer.prompt([{
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
    const mana = new Mana(answers.name, answers.email, answers.id, answers.officeNum)
    teamArr.push(mana)
    menu()
}

const engPrompt = async function () {
    const answers = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter engineer name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter id'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email'
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'Enter GitHub'
    }
    ])
    const eng = new Eng(answers.name, answers.id, answers.email, answers.username)
    teamArr.push(eng)
    menu()
}

const intPrompt = async function () {
    const answers = await inquirer.prompt([{
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
    const int = new Int(answers.name, answers.id, answers.email, answers.school)
    teamArr.push(int)
    menu()
}


const buildTeam = function () {
    fs.writeFileSync('./dist/team.html', temp(teamArr))
}

manaPrompt()