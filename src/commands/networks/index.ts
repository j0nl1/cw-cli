import { Command } from "commander";
import AddCustomNetwork from "./addCustomNetwork";
import ListNetworkCommand from "./listNetworks";
import deleteCustomNetwork from "./deleteCustomNetwork";

export default new Command("networks")
  .description("Manage networks")
  .usage("[command]")
  .addCommand(AddCustomNetwork)
  .addCommand(deleteCustomNetwork)
  .addCommand(ListNetworkCommand);
