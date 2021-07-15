import { prerendering } from "$app/env";
import { minify } from "html-minifier-terser";

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ request, resolve }) => {
  const response = await resolve(request);

  if (prerendering && response.headers["content-type"] === "text/html") {
    response.body = minify(response.body, {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      decodeEntities: true,
      html5: true,
      ignoreCustomComments: [/^#/],
      minifyCSS: true,
      minifyJS: false,
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
