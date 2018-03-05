let Default = require("./default.json")
let Tail = require('tail').Tail;
let chalk = require("chalk") 
const prompts = require('prompts');

async function run() {
    let response = await prompts({
        type: 'text',
        name: 'file',
        message: 'What file do you want me to monitor?',
        initial: Default.file,
    });
      console.log(`${chalk.bgRed.white(" MONITOR ")} Starting to monitor file: ${response.file}`)
      tail = new Tail(response.file)
      tail.on("line", function(data) {
      console.log(`${chalk.white(data)}`);
    });
  }
run()