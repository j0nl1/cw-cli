import { Option } from "commander";

export default new Option("--admin <address>", "Address of an admin").makeOptionMandatory(false);
