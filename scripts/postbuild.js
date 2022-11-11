import { rename, rm } from "node:fs/promises";

await rename("build/404/index.html", "build/404.html");
await rm("build/404", { recursive: true, force: true });
