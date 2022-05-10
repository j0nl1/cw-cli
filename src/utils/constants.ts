import os from "os";
import path from "path";

export const STORAGE_PATH = path.join(os.homedir(), ".cwcli");

export const KEYS_PATH = path.join(STORAGE_PATH, "keys.json");
export const NETWORKS_PATH = path.join(STORAGE_PATH, "custom_networks.json");
export const CONFIG_PATH = path.join(STORAGE_PATH, "config.json");
