import { Command } from "commander";
import { addKey } from "../../services/keys.service";

export default new Command("add")
  .usage("<name>")
  .argument("<name>")
  .description("Add an private key, and save to <name> file")
  .action(addKey);
