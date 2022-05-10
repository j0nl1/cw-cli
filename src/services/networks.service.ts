import util from "util";
import Network from "../interfaces/network";
import loadFile from "../utils/loadFile";
import { getNetworks, getCustomNetworks, setCustomNetworks } from "./storage.service";

export const addCustomNetwork = (filePath: string) => {
  const file = loadFile(filePath);
  if (!file) throw new Error("file not found");

  const network = JSON.parse(file.toString("utf-8")) as Network;
  const customNetworks = getCustomNetworks();

  setCustomNetworks({ ...customNetworks, [network.chainId]: network });

  console.log(`Added custom network ${network.chainId}`);
};

export const deleteCustomNetwork = (networkName: string) => {
  const networks = getCustomNetworks();
  delete networks[networkName];
  setCustomNetworks(networks);
  console.log(`Deleted custom network ${networkName}`);
};

export const listNetworks = () => {
  const networks = getNetworks();
  console.log(util.inspect(networks, false, null, true));
};
