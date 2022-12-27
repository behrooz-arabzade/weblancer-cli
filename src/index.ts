#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const path = require("path");
const program = require("commander");

// clear command line every time weblancer command called
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
