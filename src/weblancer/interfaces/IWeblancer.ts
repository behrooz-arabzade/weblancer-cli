export default interface IWeblancer {
  name: string;
  version: string;
  oldMasterVersion: string;
  description: string;
  scripts: Record<string, string>;
  keywords: string[];
  author: string;
  url: string;
}
