import { Command } from "commander";

import AddKeyCommand from "./addKey";
import ShowKeyCommand from "./showKey";
import DeleteKeyCommand from "./deleteKey";
import ListKeysCommand from "./listKeys";

export default new Command("keys")
  .description("Manage your keys")
  .usage("[command]")
  .addCommand(AddKeyCommand)
  .addCommand(DeleteKeyCommand)
  .addCommand(ShowKeyCommand)
  .addCommand(ListKeysCommand);
