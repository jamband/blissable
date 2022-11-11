import { rm } from "node:fs/promises";

await rm(".svelte-kit", { recursive: true, force: true });
await rm("build", { recursive: true, force: true });
await rm("node_modules", { recursive: true, force: true });
