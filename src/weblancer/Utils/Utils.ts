import IVersion from "weblancer/interfaces/IVersion";

export function versionToBranch(version: IVersion): string {
  return `${version.version}.${version.major}.${version.minor}`;
}

export function branchToVersion(branchName: string): IVersion | null {
  const parts = branchName.split(".");

  if (parts.length !== 3) {
    console.error("Wrong branch name");
    return null;
  }
  return {
    version: Number(parts[0]),
    major: Number(parts[1]),
    minor: Number(parts[2]),
  };
}

export function compareVersion(smaller: IVersion, bigger: IVersion): boolean {
  if (smaller.version > bigger.version) return false;

  if (smaller.version < bigger.version) return true;

  if (smaller.major > bigger.major) return false;

  if (smaller.major < bigger.major) return true;

  if (smaller.minor > bigger.minor) return false;

  if (smaller.minor < bigger.minor) return true;

  return true;
}

export function makeid(length: number) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
