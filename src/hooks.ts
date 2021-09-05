import { prerendering } from "$app/env";
import type { Handle } from "@sveltejs/kit";
import { minify } from "html-minifier-terser";

export const handle: Handle = async ({ request, resolve }) => {
  const response = await resolve(request);

  if (prerendering && response.headers["content-type"] === "text/html") {
    response.body = await minify(response.body as string, {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      decodeEntities: true,
      ignoreCustomComments: [/^#/],
      minifyJS: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      sortAttributes: true,
      sortClassName: true,
    });
  }

  return response;
};
