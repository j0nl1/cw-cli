import fs from "fs";
import path from "path";

export const loadFile = (filePath: string): Buffer => {
  const fixedPath = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
  return fs.readFileSync(fixedPath);
};
