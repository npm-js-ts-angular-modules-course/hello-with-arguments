const hello = require('./index');
console.log(process.argv);
console.log(hello.helloCustom(process.argv[2]));