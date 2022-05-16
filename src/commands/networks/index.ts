import { Command } from "commander";
import AddCustomNetwork from "./addCustomNetwork";
import ListNetworkCommand from "./listNetworks";
import deleteCustomNetwork from "./deleteCustomNetwork";
import subcommandTerm from "../../utils/subcommandTerm";

const NetworksCommand = new Command("networks")
  .description("Manage networks")
  .usage("[command]")
  .addCommand(AddCustomNetwork)
  .addCommand(deleteCustomNetwork)
  .addCommand(ListNetworkCommand);

NetworksCommand.addHelpCommand(false).configureHelp({ subcommandTerm });

export default NetworksCommand;
