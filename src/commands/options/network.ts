import { Option } from "commander";

export default new Option("--network <name>", "Name of network you want to use").makeOptionMandatory(true);
