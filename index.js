const inquirer = require("inquirer");
const axios = require("axios");
const genHTML = require("./generateHTML.js");


inquirer.prompt([
    {
        type: "input",
        message: "What is your favorite color?",
        name: "color"
      },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    }
]).then(function({ username, color}) {
    const queryUrl = `https://api.github.com/users/${username}`;
    axios.get(queryUrl)
    .then(function(res) {
    console.log(res.data);
    genHTML.generateHTML(color);
    });
  });