import { Secp256k1Pubkey } from "@cosmjs/amino";
export default interface Key {
  name: string;
  pubkey: Secp256k1Pubkey;
  privkey: string;
}
