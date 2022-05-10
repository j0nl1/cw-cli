import { getConfig, setConfig, getKey, getNework } from "./storage.service";

export const setDefaultKey = (keyName: string): void => {
  const config = getConfig();
  const key = getKey(keyName);
  if (!key) throw new Error("Key not found");
  setConfig({ ...config, key });
  console.log(`Default key set to ${keyName}`);
};

export const setDefaultNetwork = (networkName: string): void => {
  const config = getConfig();
  const network = getNework(networkName);
  if (!network) throw new Error("network not found");
  setConfig({ ...config, network });
  console.log(`Default network set to ${networkName}`);
};
