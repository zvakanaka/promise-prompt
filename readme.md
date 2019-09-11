Prompt for standard input
## Examples
Basic usage (promise):
```js
const prompt = require('promise-prompt');

prompt('What is your favorite color? ').then(answer => {
  if (answer === 'all of them') console.log('Me too!');
  else console.log('Nice I like that one too!');
});
```

Async/Await:
```js
const prompt = require('promise-prompt');

(async () => {
  const name = await prompt('What is your name? ');

  if (name === 'Adam') console.log('Me too!');
  else console.log('What a beautiful name!');
})();
```

Callback:
```js
const prompt = require('promise-prompt');

prompt('What is your favorite color? ', function (answer) {
  if (answer === 'all of them') console.log('Me too!');
  else console.log('Good one!');
});
```
