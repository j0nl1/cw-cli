import { Command } from "commander";
import SetDefaultKey from "./setDefaultKey";
import SetDefaultNetwork from "./setDefaultNetwork";

export default new Command("config")
  .description("Change default network and key configuration")
  .usage("[command]")
  .addCommand(SetDefaultKey)
  .addCommand(SetDefaultNetwork);
