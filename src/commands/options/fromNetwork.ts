import { Option } from "commander";

export default new Option("--network <networkName>", "Name of network you want to use").makeOptionMandatory(true);
