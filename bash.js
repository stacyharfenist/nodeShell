const pwd = require('./pwd');

process.stdout.write('prompt > ')
process.stdin.on('data', data => {
  const cmd = data.toString().trim()
  //process.stdout.write(pwd();
  process.stdout.write('You typed: ' + cmd)
  process.stdout.write('\nprompt >')
});
