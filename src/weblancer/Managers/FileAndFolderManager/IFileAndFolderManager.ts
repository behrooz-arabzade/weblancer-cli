export interface IFileAndFolderManager {
  cut: (from: string, to: string) => Promise<boolean>;
  createNewFolder: (folderPath: string, name: string) => Promise<boolean>;
  copy: (from: string, to: string) => Promise<boolean>;
  createInPath: (path: string) => Promise<boolean>;
  delete: (path: string) => Promise<boolean>;
  write: (folderPath: string, name: string, data?: string) => Promise<boolean>;
  read: (path: string) => Promise<string | null>;
}
