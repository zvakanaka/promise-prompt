/* NOTE: Test coverage is disabled, because it is called using
 * child_process.
 * There may be a better way to do this, but as of right now it is sufficient to
 * verify what is going through stdin and stdout.
 */
const exec = require('util').promisify(require('child_process').exec);

test('should get input from stdin with async/await', async () => {
  const outputObj = await exec('node test/example.js < test/catme-name.txt');
  expect(outputObj.stdout).toBe('What is your name?Me too!\n');
});

test('should get input from stdin with callback', async () => {
  const outputObj = await exec('node test/exampleCallback.js < test/catme-color.txt');
  expect(outputObj.stdout).toBe('What is your favorite color?Me too!\n');
});
