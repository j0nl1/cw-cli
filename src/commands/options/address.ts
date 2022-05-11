import { Option } from "commander";

export default new Option("--address <name>", "Name of address with which to sign").makeOptionMandatory(true);
