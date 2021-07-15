import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  return {
    body: [
      { href: "/about", text: "About" },
      { href: "/contact", text: "Contact" },
      { href: "https://github.com/jamband/blissable", text: "GitHub" },
    ],
  };
};
