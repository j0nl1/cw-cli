import { Command } from "commander";
import { showKey } from "../../services/keys.service";
import NetworkOption from "../options/network";

export default new Command("show")
  .usage("<name>")
  .argument("<name>")
  .description("Return address depending on network selection")
  .addOption(NetworkOption)
  .action(showKey);
