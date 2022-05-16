import { Command } from "commander";
import { addKey } from "../../services/keys.service";

export default new Command("add")
  .usage("<name>")
  .argument("<name>")
  .description("Add an encrypted private key (either newly generated or recovered), encrypt it, and save to keyring")
  .action(addKey);
