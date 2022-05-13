import { Command } from "commander";
import KeysCommand from "./commands/keys";
import NetworkCommand from "./commands/networks";
import WasmCommand from "./commands/wasm";
import getVersion from "./utils/getVersion";

export default new Command("cwcli")
  .version(getVersion())
  .description("Cosmwasm Command Line Interface")
  .usage("[command]")
  .addCommand(KeysCommand)
  .addCommand(NetworkCommand)
  .addCommand(WasmCommand)
  .addHelpCommand(false)
  .parse(process.argv);
