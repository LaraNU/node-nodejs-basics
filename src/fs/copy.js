import { access, constants, cp } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const filePath = join(__dirname, "files");
  const copyFilePath = join(__dirname, "files_copy");

  access(copyFilePath, constants.F_OK, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    } else {
      cp(filePath, copyFilePath, { recursive: true }, (err) => {
        if (err) {
          throw new Error("FS operation failed");
        }
      });
    }
  });
};

await copy();
