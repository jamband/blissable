import { rmSync } from "fs";

/** @type {import("fs").RmOptions} */
const options = {
  recursive: true,
  force: true,
};

rmSync(".svelte-kit", options);
rmSync("build", options);
