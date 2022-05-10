import { Command } from "commander";
import { setDefaultKey } from "../../services/config.service";

export default new Command("key").usage("<name>").argument("<name>").description("set default key").action(setDefaultKey);
