export interface ICommand {
  execute: (...args: string[]) => Promise<boolean>;
  getHelpNote: () => string;
}
