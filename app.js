// Node requirements
var fs = require('file-system');
var Word = require('./word.js');
var Letter = require('./letter.js');
var inquirer = require('inquirer');

// Initial inquirer prompt
var questions = [
  {
    type: 'input',
    name: 'letter',
    message: "Guess a letter!"
  },
];

inquirer.prompt(questions).then(answers => {
  console.log(JSON.stringify(answers.letter, null, '  '));
});

// End initial inquirer prompt
