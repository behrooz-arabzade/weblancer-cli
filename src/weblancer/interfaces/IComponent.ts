import IGitObject from "./IGitObject";
import IVersion from "./IVersion";

export default interface IComponent {
  path: string;
  version: IVersion;
  gitObject: IGitObject;

  save: (newVersion?: IVersion, message?: string) => Promise<boolean>;
  update: (version?: IVersion) => Promise<boolean>;
  publishVersion: (version?: IVersion) => Promise<boolean>;
  unPublishVersion: (version?: IVersion) => Promise<boolean>;
  // TODO getBuildCache
}
