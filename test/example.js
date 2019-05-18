const prompt = require('../index');

(async () => {
  const name = await prompt('What is your name?');

  if (name === 'Adam') console.log('Me too!');
  else console.log('What a beautiful name!?');
})();
