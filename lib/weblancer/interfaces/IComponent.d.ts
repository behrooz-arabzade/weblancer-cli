import IVersion from "./IVersion";
export default interface IComponent {
    path: string;
    version: IVersion;
    save: (newVersion: IVersion) => Promise<boolean>;
}
