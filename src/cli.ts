import { Command } from "commander";
import ConfigComand from "./commands/config";

export default new Command("cwcli")
  .version("0.0.2")
  .description("Cosmwasm Command Line Interface")
  .usage("[command]")
  .addCommand(ConfigComand)
  .parse(process.argv);
