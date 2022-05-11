import { Option } from "commander";

export default new Option("--from <address>", "Name of address with which to sign").makeOptionMandatory(true);
