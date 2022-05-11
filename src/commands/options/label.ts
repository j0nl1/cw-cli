import { Option } from "commander";

export default new Option("--label <msg>", "A human-readable name for this contract in lists").makeOptionMandatory(true);
