import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    inlineStyleThreshold: 1024,
    prerender: {
      default: true,
    },
    trailingSlash: "always",
  },
};

export default config;
