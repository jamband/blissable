import { rmSync, renameSync } from "fs";

renameSync("build/404/index.html", "build/404.html");
rmSync("build/404", { recursive: true, force: true });
