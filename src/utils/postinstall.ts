import fs from "fs";
import { KEYS_PATH, CONFIG_PATH, STORAGE_PATH } from "./constants";

(() => {
  if (!fs.existsSync(STORAGE_PATH)) fs.mkdirSync(STORAGE_PATH);
  if (!fs.existsSync(KEYS_PATH)) fs.writeFileSync(KEYS_PATH, JSON.stringify({}));
  if (!fs.existsSync(CONFIG_PATH)) fs.writeFileSync(CONFIG_PATH, JSON.stringify({}));
})();
