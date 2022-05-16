import { Command } from "commander";

import AddKeyCommand from "./addKey";
import ShowKeyCommand from "./showKey";
import DeleteKeyCommand from "./deleteKey";
import ListKeysCommand from "./listKeys";
import subcommandTerm from "../../utils/subcommandTerm";

const KeysCommand = new Command("keys")
  .description("Manage your keys")
  .usage("[command]")
  .addCommand(AddKeyCommand)
  .addCommand(DeleteKeyCommand)
  .addCommand(ShowKeyCommand)
  .addCommand(ListKeysCommand);

KeysCommand.addHelpCommand(false).configureHelp({ subcommandTerm });

export default KeysCommand;
