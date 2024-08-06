#! /usr/bin/env node
import inquirer from "inquirer"
let word:number;
let letter:number;
let sentence=await inquirer.prompt([{
    name:"user",
    type:"input",
    message:"Enter a sentence to get it's number of letters and number of words:"
}])
letter=sentence.user.replace(/\s+/g, '').length;
word=sentence.user.trim().split(/\s+/).length;
console.log(`Number of letters: ${letter}`);
console.log(`Number of words: ${word}`);


