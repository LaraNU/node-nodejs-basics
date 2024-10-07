import { readFile, access, constants } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = join(__dirname, "files", "fileToRead.txt");

  access(filePath, constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }

    readFile(filePath, "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  });
};

await read();
