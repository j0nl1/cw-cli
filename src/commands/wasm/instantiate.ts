import { Command } from "commander";
import { instantiate } from "../../services/wasm.service";
import AddressOption from "../options/address";
import AdminOption from "../options/admin";
import LabelOption from "../options/label";
import NetworkOption from "../options/network";

export default new Command("instantiate")
  .description("instantiate an uploaded contract")
  .usage("<codeId> <msg> --label <label> --address <name> --network <name> [options]")
  .argument("<codeId>")
  .argument("<msg>")
  .addOption(LabelOption)
  .addOption(AddressOption)
  .addOption(NetworkOption)
  .addOption(AdminOption)
  .action(instantiate);
