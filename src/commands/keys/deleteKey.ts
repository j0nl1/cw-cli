import { Command } from "commander";
import { deleteKey } from "../../services/keys.service";

export default new Command("delete")
  .usage("<name>")
  .argument("<name>")
  .description("Delete keys from the cli.")
  .action(deleteKey);
