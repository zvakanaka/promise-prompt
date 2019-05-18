const readline = require('readline');

/**
 * Prompt for user input (stdin)
 * @param  {string}   question           prompt to display to user
 * @return {string}                      answer from user input (stdin)
 */
 function prompt(question) {
   return new Promise((resolve, reject) => {
     const rl = readline.createInterface({input: process.stdin, output: process.stdout});
     rl.question(question, (answer) => {
       resolve(answer);
       rl.close();
     });
   });
 }

module.exports = prompt;
