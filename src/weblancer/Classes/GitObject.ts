import IGitObject from "weblancer/interfaces/IGitObject";
import IVersion from "weblancer/interfaces/IVersion";
import { execAsync } from "weblancer/Utils/Asyncer";

export default class GitObject implements IGitObject {
  public path: string;

  constructor(path: string) {
    this.path = path;
  }

  public createBranch = async (name: string, srcBranch?: string) => {
    try {
      if (srcBranch) await execAsync(`git checkout ${srcBranch}`);

      await execAsync(`git checkout -b ${srcBranch}`);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public changeBranchTo = async (name: string) => {
    // TODO
    return true;
  };

  public getBranchList = async () => {
    try {
      const stdout = await execAsync("git branch -r");

      let result = stdout.split("\n").map((row) => row.split("/").at(-1));

      return result as string[];
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  public checkout = async (branchName: string) => {
    try {
      await execAsync(`git checkout ${branchName}`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public status = async () => {
    try {
      return await execAsync(`git status`);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  public add = async (path: string) => {
    try {
      await execAsync(`git add "${path}"`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public addAll = async () => {
    try {
      await execAsync(`git add .`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public commit = async (message: string) => {
    try {
      await execAsync(`git commit -m "${message}"`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public push = async (
    branch: string,
    remote: string = "origin",
    force: boolean = false
  ) => {
    try {
      await execAsync(`git push ${force ? "-f " : ""}${remote} ${branch}`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public pull = async (branch: string, remote: string = "origin") => {
    try {
      await execAsync(`git pull ${remote} ${branch}`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public revert = async (hash?: string) => {
    try {
      await execAsync(`git revert ${hash ?? "HEAD"}`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public init = async () => {
    try {
      await execAsync(`git init`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public config = async (userData: Record<string, string>) => {
    try {
      for (let key in userData) {
        await execAsync(`git config user.${key} "${userData[key]}"`);
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public reset = async (branchName?: string) => {
    try {
      await execAsync(`git reset --hard ${branchName ?? "HEAD"}`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public remove = async (path: string) => {
    try {
      await execAsync(`git rm "${path}"`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public remote = async (url: string, name: string) => {
    try {
      await execAsync(`git remote add ${name} ${url}`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public getVersionHistory = async () => {
    // TODO
    return "";
  };
}
