import { Command } from "commander";
import ConfigComand from "./commands/config";
import KeysCommand from "./commands/keys";

export default new Command("cwcli")
  .version("0.0.2")
  .description("Cosmwasm Command Line Interface")
  .usage("[command]")
  .addCommand(ConfigComand)
  .addCommand(KeysCommand)
  .parse(process.argv);
