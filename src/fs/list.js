import { readdir, access, constants } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const folderPath = join(__dirname, "files");

  access(folderPath, constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }

    readdir(folderPath, (err, files) => {
      if (err) throw new Error("FS operation failed");
      else {
        files.forEach((file) => {
          console.log(file);
        });
      }
    });
  });
};

await list();
