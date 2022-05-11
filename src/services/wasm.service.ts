import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { fromBase64 } from "@cosmjs/encoding";
import { DirectSecp256k1Wallet } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { loadFile } from "../utils/fs";
import { getKey } from "./keys.service";
import { getNetwork } from "./networks.service";
import util from "util";

interface UploadWasmOptions {
  from: string;
  network: string;
  memo: string;
}

export const uploadWasm = async (filePath: string, { network: chainId, from: addressName, memo }: UploadWasmOptions) => {
  const network = getNetwork(chainId);
  const key = await getKey(addressName);

  if (!network || !key) throw new Error(`Network ${chainId} or key ${addressName} not found`);

  const wallet = await DirectSecp256k1Wallet.fromKey(fromBase64(key.privkey), network.addressPrefix);
  const [{ address }] = await wallet.getAccounts();

  const client = await SigningCosmWasmClient.connectWithSigner(network.rpc, wallet, {
    prefix: network.addressPrefix,
    gasPrice: GasPrice.fromString(`${network.gasPrice}${network.feeToken}`)
  });

  const wasm = loadFile(filePath);

  if (!wasm) throw new Error("File not found");

  const uploadReceipt = await client.upload(address, wasm, "auto", memo);
  console.info("Upload succeeded. Receipt:", util.inspect(uploadReceipt, false, null, true));
};
