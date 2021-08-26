import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  return {
    body: [
      { href: "/pagination", text: "Pagination" },
      { href: "/ratio", text: "Ratio" },
      { href: "/form", text: "Form" },
      { href: "/collapse", text: "Collapse" },
      { href: "/toast", text: "Toast" },
      { href: "/alert", text: "Alert" },
      { href: "/dropdown", text: "Dropdown" },
      { href: "/progress", text: "Progress" },
      { href: "/modal", text: "Modal" },
      { href: "/offcanvas", text: "Offcanvas" },
    ],
  };
};
