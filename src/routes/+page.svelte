<script lang="ts">
  import { IconChevronRight } from "@/icons";
  import { Page } from "@/layouts/page";

  const links = [
    { href: "/pagination/", text: "Pagination" },
    { href: "/ratio/", text: "Ratio" },
    { href: "/form/", text: "Form" },
    { href: "/collapse/", text: "Collapse" },
    { href: "/toast/", text: "Toast" },
    { href: "/alert/", text: "Alert" },
    { href: "/dropdown/", text: "Dropdown" },
    { href: "/progress/", text: "Progress" },
    { href: "/modal/", text: "Modal" },
    { href: "/offcanvas/", text: "Offcanvas" },
  ];
</script>

<Page />
<ul class="list-unstyled">
  {#each links as { href, text } (href)}
    <li class="mb-3">
      <h2>
        <a {href} class="text-decoration-none"
          >{text}<IconChevronRight
            class="ms-2"
            style="height: 0.6em; width: 0.6em; vertical-align: 0em;"
          /></a
        >
      </h2>
    </li>
  {/each}
</ul>
