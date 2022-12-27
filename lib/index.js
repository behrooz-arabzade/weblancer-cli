#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var clear_1 = __importDefault(require("clear"));
var figlet_1 = __importDefault(require("figlet"));
var program = require("commander");
(0, clear_1.default)();
console.log(chalk_1.default.red(figlet_1.default.textSync("weblancer-cli", { horizontalLayout: "full" })));
program
    .version("0.0.1")
    .description("Welcome to the weblancer-cli")
    .parse(process.argv);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
