const {expect, it, describe} = require('./expect');
const main = require('../index');
const exec = require('util').promisify(require('child_process').exec);

describe('the main function', () => {
  it('should get input from stdin with async/await', async () => {
    const outputObj = await exec('node test/example.js < test/catme-name.txt');
    expect(outputObj.stdout).to.equal('What is your name?Me too!\n');
  });
  it('should get input from stdin with callback', async () => {
    const outputObj = await exec('node test/exampleCallback.js < test/catme-color.txt');
    expect(outputObj.stdout).to.equal('What is your favorite color?Me too!\n');
  });
});
