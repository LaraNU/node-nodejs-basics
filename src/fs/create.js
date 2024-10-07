import { writeFile } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const filePath = join(__dirname, "files", "fresh.txt");

  writeFile(filePath, "I am fresh and young", { flag: "wx" }, function (err) {
    if (err) throw new Error("FS operation failed");
  });
};

await create();
