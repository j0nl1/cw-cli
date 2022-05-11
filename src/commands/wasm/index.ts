import { Command } from "commander";
import UploadCommand from "./upload";

export default new Command("wasm")
  .description("Wasm transaction subcommands")
  .usage("[command]")
  .argument("[command]")
  .addCommand(UploadCommand);
