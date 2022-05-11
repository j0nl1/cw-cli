import { Command } from "commander";
import { showKey } from "../../services/keys.service";
import fromNetwork from "../options/fromNetwork";

export default new Command("show")
  .usage("<name>")
  .argument("<name>")
  .description("Return address depending on network selection")
  .addOption(fromNetwork)
  .action(showKey);
