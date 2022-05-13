import { Command, Help } from "commander";
import UploadCommand from "./upload";
import InstantiateCommand from "./instantiate";
import QueryCommand from "./query";
import ExecuteCommand from "./execute";
import subcommandTerm from "../../utils/subcommandTerm";

const t = new Help();

const WasmCommand = new Command("wasm")
  .description("Wasm transaction subcommands")
  .usage("[command]")
  .addCommand(UploadCommand)
  .addCommand(QueryCommand)
  .addCommand(ExecuteCommand)
  .addCommand(InstantiateCommand);

WasmCommand.addHelpCommand(false).configureHelp({ subcommandTerm });

export default WasmCommand;
