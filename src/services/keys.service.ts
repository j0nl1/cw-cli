import util from "util";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { getKeys, setKeys } from "../services/storage.service";
import { setDefaultKey } from "./config.service";
import Key from "../interfaces/key";

export const addKey = async (name: string) => {
  const wallet = await DirectSecp256k1HdWallet.generate(24);
  const [{ address, pubkey }] = await wallet.getAccounts();

  const walletInfo: Key = {
    name,
    address,
    pubkey: Buffer.from(pubkey).toString("hex"),
    mnemonic: wallet.mnemonic,
    type: "local"
  };

  const keys = getKeys();
  setKeys({ ...keys, [name]: walletInfo });

  console.log(walletInfo);
  if (!Object.keys(keys).length) setDefaultKey(name);
};

export const deleteKey = async (name: string) => {
  const keys = getKeys();
  delete keys[name];
  setKeys(keys);
  console.log(`Key ${name} deleted`);
};

export const listKeys = async () => {
  const keys = getKeys();
  console.log(util.inspect(keys, false, null, true));
};
