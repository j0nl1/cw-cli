import { Command } from "commander";

export default new Command("cwcli")
  .version("0.0.2")
  .description("Cosmwasm Command Line Interface")
  .usage("[command]")
  .parse(process.argv);
