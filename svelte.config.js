import adapter from "@sveltejs/adapter-static";
import { resolve } from "path";
import preprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    trailingSlash: "always",
    vite: {
      resolve: {
        alias: {
          "~": resolve("src"),
        },
      },
    },
  },
};

export default config;
