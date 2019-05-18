const {expect, it, describe} = require('./expect');
const main = require('../index');
const exec = require('util').promisify(require('child_process').exec);

describe('the main function', () => {
  it('should get input from stdin', async () => {
    const outputObj = await exec('node test/example.js < test/catme.txt');
    expect(outputObj.stdout).to.equal('What is your name?Me too!\n');
  });
});
