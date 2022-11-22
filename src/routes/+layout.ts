import type {
  PrerenderOption,
  TrailingSlash,
} from "@sveltejs/kit/types/private";

export const prerender: PrerenderOption = true;
export const trailingSlash: TrailingSlash = "always";
