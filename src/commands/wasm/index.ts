import { Command } from "commander";
import UploadCommand from "./upload";
import InstantiateCommand from "./instantiate";
import QueryCommand from "./query";
import ExecuteCommand from "./execute";

export default new Command("wasm")
  .description("Wasm transaction subcommands")
  .usage("[command]")
  .argument("[command]")
  .addCommand(UploadCommand)
  .addCommand(QueryCommand)
  .addCommand(ExecuteCommand)
  .addCommand(InstantiateCommand);
