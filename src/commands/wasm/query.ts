import { Command, Help } from "commander";
import { queryContract } from "../../services/wasm.service";
import NetworkOption from "../options/network";

export default new Command("query")
  .description("Querying commands for contracts")
  .usage("<address> <msg> [options]")
  .argument("<address>")
  .argument("<msg>")
  .addOption(NetworkOption)
  .action(queryContract);
