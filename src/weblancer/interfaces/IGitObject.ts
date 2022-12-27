import IVersion from "./IVersion";

export default interface IGitObject {
  path: string;

  createBranch: (name: string, srcBranch: string) => Promise<boolean>;
  changeBranchTo: (name: string) => Promise<boolean>;
  getBranchList: () => Promise<string[] | null>;
  checkout: (branchName: string) => Promise<boolean>;
  status: () => Promise<string | null>;
  add: (path: string) => Promise<boolean>;
  addAll: () => Promise<boolean>;
  commit: (message: string) => Promise<boolean>;
  push: (branch: string, remote?: string, force?: boolean) => Promise<boolean>;
  pull: (branch: string, remote?: string) => Promise<boolean>;
  revert: (hash?: string) => Promise<boolean>;
  init: () => Promise<boolean>;
  config: (userData: Record<string, string>) => Promise<boolean>;
  reset: (branchName?: string) => Promise<boolean>;
  remove: (path: string) => Promise<boolean>;
  remote: (url: string, name: string) => Promise<boolean>;
  getVersionHistory: () => Promise<string>;
}
