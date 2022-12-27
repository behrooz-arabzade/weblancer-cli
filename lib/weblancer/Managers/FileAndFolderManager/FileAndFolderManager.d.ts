import { IFileAndFolderManager } from "./IFileAndFolderManager";
declare class FileAndFolderManager implements IFileAndFolderManager {
    constructor();
    cut: (from: string, to: string) => Promise<boolean>;
    createNewFolder: (folderPath: string, name: string, ifNotExist?: false) => Promise<boolean>;
    copy: (from: string, to: string) => Promise<boolean>;
    createInPath: (path: string) => Promise<boolean>;
    delete: (path: string) => Promise<boolean>;
    createNewFile: (folderPath: string, name: string, data?: string) => Promise<boolean>;
}
declare const _default: FileAndFolderManager;
export default _default;
