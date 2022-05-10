import { Command } from "commander";
import { listKeys } from "../../services/keys.service";

export default new Command("list").description("Return a list of all public keys stored by this cli").action(listKeys);
