import { Command } from "commander";
import { listNetworks } from "../../services/networks.service";

export default new Command("list").usage("list").description("show a list of networks").action(listNetworks);
