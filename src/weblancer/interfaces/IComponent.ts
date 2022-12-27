import IVersion from "./IVersion";

export default interface IComponent {
  path: string;
  version: IVersion;
  // gitObject

  save: (newVersion: IVersion) => Promise<boolean>;
  // TODO
}
