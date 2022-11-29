import { building } from "$app/environment";
import type { Handle } from "@sveltejs/kit";
import { minify } from "html-minifier-terser";

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  if (building && response.headers.get("content-type") === "text/html") {
    const body = await minify(await response.text(), {
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

    return new Response(body, {
      status: response.status,
      headers: response.headers,
    });
  }

  return response;
};
