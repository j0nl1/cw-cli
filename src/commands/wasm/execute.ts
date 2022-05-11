import { Command } from "commander";
import { executeContract } from "../../services/wasm.service";
import AddressOption from "../options/address";
import NetworkOption from "../options/network";

export default new Command("execute")
  .description("execute a smart contract method")
  .usage("<contractAddress> <msg> --address <name> --network <name> [options]")
  .argument("<contractAddress>")
  .argument("<msg>")
  .addOption(AddressOption)
  .addOption(NetworkOption)
  .action(executeContract);
