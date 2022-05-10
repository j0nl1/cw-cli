import fs from "fs";
import { STORAGE_PATH, CONFIG_PATH, KEYS_PATH, NETWORKS_PATH } from "./constants";

(() => {
  if (!fs.existsSync(STORAGE_PATH)) fs.mkdirSync(STORAGE_PATH);
  if (!fs.existsSync(KEYS_PATH)) fs.writeFileSync(KEYS_PATH, JSON.stringify({}));
  if (!fs.existsSync(CONFIG_PATH)) fs.writeFileSync(CONFIG_PATH, JSON.stringify({}));
  if (!fs.existsSync(NETWORKS_PATH)) fs.writeFileSync(NETWORKS_PATH, JSON.stringify({}));
})();
