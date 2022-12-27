import path from "path";
import IWeblancer from "weblancer/interfaces/IWeblancer";
import fileAndFolderManager from "weblancer/Managers/FileAndFolderManager/FileAndFolderManager";

export async function getWeblancerConfig(
  folder: string
): Promise<IWeblancer | null> {
  try {
    const data = await fileAndFolderManager.read(
      path.join(folder, "weblancer.config")
    );

    return JSON.parse(data!) as IWeblancer;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function setWeblancerConfig(
  folder: string,
  config: IWeblancer
): Promise<boolean> {
  if (
    !(await fileAndFolderManager.write(
      folder,
      "weblancer.config",
      JSON.stringify(config)
    ))
  )
    return false;

  return true;
}
