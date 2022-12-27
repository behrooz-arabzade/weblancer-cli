import IComponent from "weblancer/interfaces/IComponent";
import IVersion from "weblancer/interfaces/IVersion";
import { execAsync } from "weblancer/Utils/Asyncer";
import {
  getWeblancerConfig,
  setWeblancerConfig,
} from "weblancer/Utils/ConfigFileHelper";
import {
  branchToVersion,
  makeid,
  versionToBranch,
} from "weblancer/Utils/Utils";
import GitObject from "./GitObject";

export default class Component implements IComponent {
  public path: string;
  public version: IVersion;
  public gitObject: GitObject;

  constructor(path: string, gitObject: GitObject, version?: IVersion) {
    this.path = path;
    this.gitObject = gitObject;
    this.version = version ?? {
      version: 0,
      major: 0,
      minor: 1,
    };
  }

  private init = async () => {
    // TODO add user config to git
  };

  public save = async (newVersion?: IVersion, message?: string) => {
    if (!(await this.gitObject.addAll())) return false;

    if (!(await this.gitObject.commit(message ?? makeid(12)))) return false;

    if (
      !(await this.gitObject.pull(versionToBranch(newVersion ?? this.version)))
    )
      return false;

    const success = await this.gitObject.push(
      versionToBranch(newVersion ?? this.version)
    );

    if (success && newVersion) this.version = newVersion;

    return success;
  };

  public update = async (version?: IVersion) => {
    const success = await this.gitObject.pull(
      versionToBranch(version ?? this.version)
    );

    if (success && version) this.version = version;

    return success;
  };

  public publishVersion = async (version?: IVersion) => {
    if (!(await this.gitObject.checkout("master"))) return false;

    const oldMasterConfig = await getWeblancerConfig(this.path);

    if (
      !(await this.gitObject.checkout(versionToBranch(version ?? this.version)))
    )
      return false;

    const newMasterConfig = await getWeblancerConfig(this.path);

    if (oldMasterConfig && newMasterConfig)
      newMasterConfig.oldMasterVersion = oldMasterConfig.version;

    if (!(await this.gitObject.checkout("master"))) return false;

    if (!(await this.gitObject.reset(versionToBranch(version ?? this.version))))
      return false;

    if (!(await setWeblancerConfig(this.path, newMasterConfig!))) return false;

    if (!(await this.gitObject.push("master", undefined, true))) return false;

    return true;
  };

  public unPublishVersion = async (version?: IVersion) => {
    if (!(await this.gitObject.checkout("master"))) return false;

    const masterConfig = await getWeblancerConfig(this.path);
    if (!masterConfig) {
      console.error("Can not find master branch");
      return false;
    }

    if (versionToBranch(version ?? this.version) !== masterConfig.version) {
      console.error("This version is not master");
      return false;
    }

    const oldVersion = masterConfig.oldMasterVersion;

    if (!(await this.gitObject.checkout("master"))) return false;

    if (!(await this.gitObject.reset(oldVersion))) return false;

    return true;
  };
}
