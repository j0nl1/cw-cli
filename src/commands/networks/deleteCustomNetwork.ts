import { Command } from "commander";
import { deleteCustomNetwork } from "../../services/networks.service";

export default new Command("delete")
  .usage("<name>")
  .argument("<name>")
  .description("Remove a custom network")
  .action(deleteCustomNetwork);
