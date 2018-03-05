let config = require("./config")
let Tail = require('tail').Tail;
let chalk = require("chalk") 
tail = new Tail(config.file);
 
tail.on("line", function(data) {
  console.log(chalk.red(data));
});