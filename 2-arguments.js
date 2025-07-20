const args = process.argv.length - 2;

if (args === 0) {
  console.log('0 argument');
} else if (args === 1) {
  console.log('1 argument');
} else {
  console.log(`${args} arguments`);
}
