import fs from "fs";
import Key from "../interfaces/key";
import Config from "../interfaces/config";
import Network from "../interfaces/network";
import defaultNetworks from "../utils/networks.json";
import { CONFIG_PATH, NETWORKS_PATH, KEYS_PATH } from "../utils/constants";

type StorageKeys = { [key: string]: Key };
type StorageNetworks = { [key: string]: Network };

export const getKeys = (): StorageKeys => {
  const keys = fs.readFileSync(KEYS_PATH);
  return JSON.parse(keys.toString("utf-8"));
};

export const setKeys = (keys: StorageKeys) => {
  fs.writeFileSync(KEYS_PATH, JSON.stringify(keys, null, 2));
};

export const getKey = (name: string): Key => {
  const keys = getKeys();
  if (!Object.keys(keys).length) throw new Error("No keys found");
  return keys[name];
};

export const getCustomNetworks = (): StorageNetworks => {
  const customNetworks = fs.readFileSync(NETWORKS_PATH);
  return JSON.parse(customNetworks.toString("utf-8"));
};

export const setCustomNetworks = (networks: StorageNetworks) => {
  fs.writeFileSync(NETWORKS_PATH, JSON.stringify(networks, null, 2));
};

export const getNetworks = (): StorageNetworks => {
  return defaultNetworks;
};

export const getNework = (name: string): Network => {
  const networks = { ...getNetworks(), ...getCustomNetworks() };
  if (!networks[name]) throw new Error("Network not found");
  return networks[name];
};

export const getConfig = (): Config => {
  const config = fs.readFileSync(CONFIG_PATH);
  return JSON.parse(config.toString("utf-8"));
};

export const setConfig = (config: Config) => {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
};
