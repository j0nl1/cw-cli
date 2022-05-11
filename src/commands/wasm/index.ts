import { Command } from "commander";
import UploadCommand from "./upload";
import InstantiateCommand from "./instantiate";

export default new Command("wasm")
  .description("Wasm transaction subcommands")
  .usage("[command]")
  .argument("[command]")
  .addCommand(UploadCommand)
  .addCommand(InstantiateCommand);
