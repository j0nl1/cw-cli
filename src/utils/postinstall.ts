import fs from "fs";
import { STORAGE_PATH, NETWORKS_PATH } from "./constants";

(() => {
  if (!fs.existsSync(STORAGE_PATH)) fs.mkdirSync(STORAGE_PATH);
  if (!fs.existsSync(NETWORKS_PATH)) fs.writeFileSync(NETWORKS_PATH, JSON.stringify({}));
})();
