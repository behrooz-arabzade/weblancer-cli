#!/usr/bin/env node

import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
const program = require("commander");

clear();

console.log(
  chalk.red(figlet.textSync("weblancer-cli", { horizontalLayout: "full" }))
);

program
  .version("0.0.1")
  .description("Welcome to the weblancer-cli")
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
