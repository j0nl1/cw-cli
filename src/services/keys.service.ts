import util from "util";
import keytar from "keytar";
import { Bip39, Random, Slip10, Slip10Curve, Secp256k1 } from "@cosmjs/crypto";
import { encodeSecp256k1Pubkey, makeCosmoshubPath, rawSecp256k1PubkeyToRawAddress } from "@cosmjs/amino";
import { getNetwork } from "./networks.service";
import { toBase64, fromBase64 } from "../utils/encoding";
import { toBech32 } from "@cosmjs/encoding";
import { CWCLI_SERVICE } from "../utils/constants";
import Key from "../interfaces/key";
import { CommanderError } from "commander";

export const getKeys = async (): Promise<Key[]> => {
  const keys = await keytar.findCredentials(CWCLI_SERVICE);
  return keys.map(({ password: key }) => JSON.parse(fromBase64(key).toString("utf-8")));
};

export const getKey = async (name: string): Promise<Key | undefined> => {
  const keys = await getKeys();
  return keys.find(({ name: keyName }) => keyName === name);
};

export const setKey = async (name: string, payload: Key) => {
  const data = toBase64(JSON.stringify(payload));
  await keytar.setPassword(CWCLI_SERVICE, name, data);
};

export const deleteKey = async (name: string) => {
  await keytar.deletePassword(CWCLI_SERVICE, name);
  console.log(`Key ${name} deleted`);
};

export const listKeys = async () => {
  const keys = await getKeys();
  const keysWithoutPrivkeys = keys.map(({ privkey, ...rest }) => rest);
  console.log(util.inspect(keysWithoutPrivkeys, false, null, true));
};

export const showKey = async (name: string, { network: networkName }: { network: string }) => {
  const key = await getKey(name);
  const network = await getNetwork(networkName);
  if (!key || !network) throw new CommanderError(0, "111", `Key ${name} or network ${networkName} not found`);
  const decodeSecp256k1Pubkey = toBech32(
    network.addressPrefix,
    rawSecp256k1PubkeyToRawAddress(Buffer.from(key.pubkey.value, "base64"))
  );
  console.log(decodeSecp256k1Pubkey);
};

export const addKey = async (name: string, { index = "0" }: { index: string }) => {
  const mnemonic = Bip39.encode(Random.getBytes(32));
  const seed = await Bip39.mnemonicToSeed(mnemonic);
  const { privkey } = Slip10.derivePath(Slip10Curve.Secp256k1, seed, makeCosmoshubPath(parseInt(index)));
  const { pubkey } = await Secp256k1.makeKeypair(privkey);

  const key: Key = {
    name,
    pubkey: encodeSecp256k1Pubkey(Secp256k1.compressPubkey(pubkey)),
    privkey: toBase64(privkey)
  };

  await setKey(name, key);

  console.log(`pubKey: ${util.inspect(key.pubkey, false, null, true)}`);
  console.log(
    "**Important** write this mnemonic phrase in a safe place \n It is the only way to recover your account if you ever forget your password.\n"
  );
  console.log(`mnemonic: ${mnemonic}`);
};
