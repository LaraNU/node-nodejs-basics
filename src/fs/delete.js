import { unlink, access, constants } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const deletedFilePath = join(__dirname, "files", "fileToRemove.txt");

  access(deletedFilePath, constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }

    unlink(deletedFilePath, (err) => {
      if (err) throw new Error("FS operation failed");
    });
  });
};

await remove();
