const prompt = require('../index');

prompt('What is your favorite color?', answer => {
  if (answer === 'all of them') console.log('Me too!');
  else console.log('Good one!');
});
