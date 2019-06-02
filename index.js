const readline = require('readline');

/**
 * Prompt for user input (from stdin)
 * @param  {string}   question  prompt to display to user
 * @return {string}             answer from user input (stdin)
 */
 function prompt(question, cb) {
   const rl = readline.createInterface({input: process.stdin, output: process.stdout});
   if (cb) { // callback provided - call callback with input
     rl.question(question, answer => {
       cb(answer);
       rl.close();
     });
   } else {
     return new Promise((resolve, reject) => {
       rl.question(question, answer => {
         resolve(answer);
         rl.close();
       });
     });
   }
 }

module.exports = prompt;
