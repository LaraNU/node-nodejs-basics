import { rename as fsRename, access, constants } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const filePath = join(__dirname, "files", "wrongFilename.txt");
  const newFilePath = join(__dirname, "files", "properFilename.md");

  access(filePath, constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }

    access(newFilePath, constants.F_OK, (err) => {
      if (!err) {
        throw new Error("FS operation failed");
      }

      fsRename(
        filePath,
        join(__dirname, "files", "properFilename.md"),
        function (err) {
          if (err) throw new Error("FS operation failed");
        }
      );
    });
  });
};

await rename();
