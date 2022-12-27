"use strict";
var ChildProcess = require("child_process").ChildProcess;
var fs = require("fs");
function existsAsync(path) {
    return new Promise(function (resolve, reject) {
        fs.exists(path, function (exists) {
            resolve(exists);
        });
    });
}
function execAsync(command) {
    return new Promise(function (resolve, reject) {
        ChildProcess.exec(command, function (err, stout, sterr) {
            if (err) {
                reject(sterr);
            }
            else {
                resolve(stout);
            }
        });
    });
}
