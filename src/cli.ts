import { Command } from "commander";
import KeysCommand from "./commands/keys";
import NetworkCommand from "./commands/networks";
import WasmCommand from "./commands/wasm";

export default new Command("cwcli")
  .version("0.0.5")
  .description("Cosmwasm Command Line Interface")
  .usage("[command]")
  .addCommand(KeysCommand)
  .addCommand(NetworkCommand)
  .addCommand(WasmCommand)
  .parse(process.argv);
