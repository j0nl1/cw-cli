import { Command } from "commander";
import { setDefaultNetwork } from "../../services/config.service";

export default new Command("network")
  .usage("<name>")
  .argument("<name>")
  .description("set default network")
  .action(setDefaultNetwork);
