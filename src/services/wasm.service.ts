import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { fromBase64 } from "@cosmjs/encoding";
import { DirectSecp256k1Wallet } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { loadFile } from "../utils/fs";
import { getKey } from "./keys.service";
import { getNetwork } from "./networks.service";
import util from "util";
import Network from "../interfaces/network";
import Key from "../interfaces/key";

interface WasmOptions {
  address: string;
  network: string;
  label: string;
}

export const uploadWasm = async (filePath: string, opts: WasmOptions) => {
  const { client, address } = await getSigningClientAndAddress(opts.network, opts.address);

  const wasm = loadFile(filePath);

  if (!wasm) throw new Error("File not found");

  const uploadReceipt = await client.upload(address, wasm, "auto");
  console.info("Upload succeeded. Receipt:", util.inspect(uploadReceipt, false, null, true));
};

export const instantiate = async (codeId: string, msg: string, opts: WasmOptions) => {
  const { client, address } = await getSigningClientAndAddress(opts.network, opts.address);

  const instantiateReceip = await client.instantiate(address, parseInt(codeId), JSON.parse(msg), opts.label, "auto");
  console.info("Instantiate succeeded. Receipt:", util.inspect(instantiateReceip, false, null, true));
};

const getNetworkAndKey = async (chainId: string, addressName: string): Promise<{ network: Network; key: Key }> => {
  const network = getNetwork(chainId);
  const key = await getKey(addressName);

  if (!network || !key) throw new Error(`Network ${chainId} or key ${addressName} not found`);
  return { network, key };
};

const getSigningClientAndAddress = async (
  chainId: string,
  addressName: string
): Promise<{ client: SigningCosmWasmClient; address: string }> => {
  const { network, key } = await getNetworkAndKey(chainId, addressName);

  const wallet = await DirectSecp256k1Wallet.fromKey(fromBase64(key.privkey), network.addressPrefix);
  const [{ address }] = await wallet.getAccounts();

  const client = await SigningCosmWasmClient.connectWithSigner(network.rpc, wallet, {
    prefix: network.addressPrefix,
    gasPrice: GasPrice.fromString(`${network.gasPrice}${network.feeToken}`)
  });

  return { client, address };
};
