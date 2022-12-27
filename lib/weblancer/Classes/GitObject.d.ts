import IGitObject from "weblancer/interfaces/IGitObject";
import IVersion from "weblancer/interfaces/IVersion";
export default class GitObject implements IGitObject {
    path: string;
    version: IVersion;
    constructor(path: string, version?: IVersion);
    createBranch: (name: string) => Promise<boolean>;
    changeBranchTo: (name: string) => Promise<boolean>;
    getBranchList: () => Promise<never[]>;
    checkout: (branchName: string) => Promise<boolean>;
    status: () => Promise<string>;
    add: (path: string) => Promise<boolean>;
    changeToBranch: (name: string) => Promise<boolean>;
    addAll: () => Promise<boolean>;
    commit: (message: string) => Promise<boolean>;
    push: (...options: any) => Promise<boolean>;
    pull: (...options: any) => Promise<boolean>;
    revert: (hash: string) => Promise<boolean>;
    init: (name: string) => Promise<boolean>;
    config: (userData: any) => Promise<boolean>;
    reset: (path: string) => Promise<boolean>;
    remove: (path: string) => Promise<boolean>;
    remote: (url: string, name: string) => Promise<boolean>;
    getVersionHistory: () => Promise<string>;
}
