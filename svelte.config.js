import adapter from "@sveltejs/adapter-static";
import { resolve } from "path";
import preprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    trailingSlash: "always",
    inlineStyleThreshold: 1024,
    prerender: {
      default: true,
    },
    vite: {
      optimizeDeps: {
        include: ["svelte/internal"],
        exclude: ["svelte/animate"],
      },
      resolve: {
        alias: {
          "~": resolve("src"),
        },
      },
    },
  },
};

export default config;
