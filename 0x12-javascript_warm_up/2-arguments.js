const args = process.argv.length - 2;

if (args === 0) {
  console.log('No argument');
} else if (args === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
node 0x12-javascript_warm_up/2-arguments.js
node 0x12-javascript_warm_up/2-arguments.js Hello
node 0x12-javascript_warm_up/2-arguments.js Hello World

