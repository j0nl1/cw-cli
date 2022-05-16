import { Command } from "commander";
import { uploadWasm } from "../../services/wasm.service";
import AddressOption from "../options/address";
import NetworkOption from "../options/network";

export default new Command("upload")
  .description("Upload a wasm binary")
  .usage("<wasm file> [options]")
  .argument("<wasm file>")
  .addOption(AddressOption)
  .addOption(NetworkOption)
  .action(uploadWasm);
