import { Command } from "commander";
import { uploadWasm } from "../../services/wasm.service";
import fromAddress from "../options/fromAddress";
import fromNetwork from "../options/fromNetwork";

export default new Command("upload")
  .description("Upload a wasm binary")
  .usage("<wasm file> [options]")
  .argument("<wasm file>")
  .addOption(fromAddress)
  .addOption(fromNetwork)
  .action(uploadWasm);
