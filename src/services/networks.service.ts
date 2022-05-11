import fs from "fs";
import util from "util";
import Network from "../interfaces/network";
import { loadFile } from "../utils/fs";
import defaultNetworks from "../utils/networks.json";
import { NETWORKS_PATH } from "../utils/constants";

export const getCustomNetworks = (): Network[] => {
  const customNetworks = fs.readFileSync(NETWORKS_PATH);
  return JSON.parse(customNetworks.toString("utf-8"));
};

export const setCustomNetworks = (networks: Network[]) => {
  fs.writeFileSync(NETWORKS_PATH, JSON.stringify(networks, null, 2));
};

export const getNetworks = (): Network[] => {
  return [...(defaultNetworks as unknown as Network[]), ...getCustomNetworks()];
};

export const getNetwork = (name: string): Network | undefined => {
  const networks = getNetworks();
  return networks.find(({ chainId }) => chainId === name);
};

export const addCustomNetwork = (filePath: string) => {
  const file = loadFile(filePath);
  if (!file) throw new Error("file not found");

  const network = JSON.parse(file.toString("utf-8")) as Network;
  const customNetworks = getCustomNetworks();

  setCustomNetworks([...customNetworks, network]);

  console.log(`Added custom network ${network.chainId}`);
};

export const deleteCustomNetwork = (networkName: string) => {
  const networks = getCustomNetworks();
  const index = networks.findIndex(({ chainId }) => chainId === networkName);
  networks.splice(index, 1);
  setCustomNetworks(networks);
  console.log(`Deleted custom network ${networkName}`);
};

export const listNetworks = () => {
  const networks = getNetworks();
  console.log(util.inspect(networks, false, null, true));
};
