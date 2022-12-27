const ChildProcess = require("child_process").ChildProcess;

var fs = require("fs");

export function existsAsync(path: string): Promise<boolean> {
  return new Promise(function (resolve, reject) {
    fs.exists(path, function (exists: boolean) {
      resolve(exists);
    });
  });
}

export function execAsync(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    ChildProcess.exec(command, (err: any, stout: string, sterr: string) => {
      if (err) {
        reject(sterr);
      } else {
        resolve(stout);
      }
    });
  });
}
