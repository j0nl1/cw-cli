import os from "os";
import path from "path";

export const CWCLI_SERVICE = "cwcli";
export const STORAGE_PATH = path.join(os.homedir(), ".cwcli");

export const NETWORKS_PATH = path.join(STORAGE_PATH, "networks.json");
