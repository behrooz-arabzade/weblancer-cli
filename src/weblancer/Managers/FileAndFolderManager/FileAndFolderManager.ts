import { IFileAndFolderManager } from "./IFileAndFolderManager";
import { promises as fsPromises } from "fs";
import path from "path";
import { existsAsync } from "weblancer/Utils/Asyncer";

class FileAndFolderManager implements IFileAndFolderManager {
  constructor() {}

  public cut = async (from: string, to: string) => {
    try {
      await fsPromises.rename(from, to);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public createNewFolder = async (
    folderPath: string,
    name: string,
    ifNotExist?: false
  ) => {
    try {
      const targetPath = path.join(folderPath, name);
      if (!ifNotExist && (await existsAsync(targetPath))) {
        console.error("Folder exists !!!");
        return false;
      }

      await fsPromises.mkdir(targetPath);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public copy = async (from: string, to: string) => {
    try {
      await fsPromises.copyFile(from, to);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public createInPath = async (path: string) => {
    // TODO
    return true;
  };

  public delete = async (path: string) => {
    try {
      await fsPromises.unlink(path);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public write = async (folderPath: string, name: string, data?: string) => {
    try {
      await fsPromises.writeFile(path.join(folderPath, name), data ?? "");
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  public read = async (path: string) => {
    try {
      return await fsPromises.readFile(path, "utf8");
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}

const fileAndFolderManager = new FileAndFolderManager();

export default fileAndFolderManager;
