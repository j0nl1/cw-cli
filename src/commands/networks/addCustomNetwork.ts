import { Command } from "commander";
import { addCustomNetwork } from "../../services/networks.service";

export default new Command("add")
  .description("Load a custom network")
  .usage("<filePath>")
  .argument("<filePath>")
  .action(addCustomNetwork);
