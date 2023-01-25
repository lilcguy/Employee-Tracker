const inquirer = require('inquirer');


inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'update an employee role'],
            name: 'choice'
        }
    ])

    .then((response) => {
        console.log(response);

        if (response.choice === 'View All Departments') {
            console.log('a chosen')
        }
        if (response.choice === 'View all employees') {
            console.log('b chosen')
        }
        if (response.choice === 'Add a department') {
            console.log('c chosen')
        } 
        if (response.choice === 'Add a role') {
            console.log('c chosen')
        } 
        if (response.choice === 'Add an employee') {
            console.log('c chosen')
        } 
        if (response.choice === 'update an employee role') {
            console.log('c chosen')
        } 
    });