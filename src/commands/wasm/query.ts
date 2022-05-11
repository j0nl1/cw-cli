import { Command } from "commander";
import { queryContract } from "../../services/wasm.service";
import NetworkOption from "../options/network";

export default new Command("query")
  .description("Querying commands for contracts")
  .usage("<contract> <msg> [options]")
  .argument("<contract>")
  .argument("<msg>")
  .addOption(NetworkOption)
  .action(queryContract);
