import GitObject from "weblancer/Classes/GitObject";
export interface IVersionControlManager {
    gitObjects: GitObject[];
    clone: (url: string, path: string) => Promise<boolean>;
    addGitObject: (path: string) => Promise<boolean>;
    getGitObject: (path: string) => Promise<GitObject>;
    checkout: (branchName: string) => Promise<boolean>;
    status: () => Promise<string>;
}
