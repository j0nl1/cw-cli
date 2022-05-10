import fs from "fs";
import path from "path";

export default (filePath: string): Buffer => {
  const fixedPath = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
  return fs.readFileSync(fixedPath);
};
