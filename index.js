const inquirer = require("inquirer");
const axios = require("axios");
const pdf = require("html-pdf");
const genHTML = require("./generateHTML.js");
var options = { format: 'Letter' }


const questions = [
  {
      type: "input",
      message: "What is your Github username?",
      name: "username"
  },
  {
    type: "list",
    message: "What is your favorite color?",
    choices: ['green', 'blue', 'pink', 'red'],
    name: "color"
  }
];

function writeToFile(fileName, data) {
  pdf.create(data, options).toFile(fileName, function(err, res) {
    if (err) return console.log(err);
    console.log(res);
  });
}

function init() {
  inquirer.prompt(questions)
  .then(function({ username, color}) {
      const queryUrl = `https://api.github.com/users/${username}`;
      axios.get(queryUrl)
      .then(function(res) {
      console.log(res.data);
      res.data.color = color;
      writeToFile(`${res.data.name}-GithubProfile.pdf`, genHTML.generateHTML(res.data));  
      });
  });
}  
  init();