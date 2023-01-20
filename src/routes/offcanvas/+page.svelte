<script lang="ts">
  import { IconChevronRight } from "@/icons";
  import { Page } from "@/layouts/page";
  import { onMount } from "svelte";

  const links = [
    { href: "/", text: "Home" },
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

  const moreLinks = [
    { href: "/about/", text: "About" },
    { href: "/contact/", text: "Contact" },
    { href: "https://github.com/jamband/blissable", text: "GitHub" },
  ];

  onMount(() => {
    import("bootstrap/js/dist/offcanvas");
  });
</script>

<Page title="Offcanvas" />
<h1>Offcanvas</h1>
<article>
  <button
    class="btn btn-primary"
    data-bs-toggle="offcanvas"
    data-bs-target="#exampleOffcanvas"
    aria-controls="exampleOffcanvas"
    >Go to Pages <IconChevronRight
      class="ms-1"
      style="height: 1em; width: 1em; vertical-align: -0.125em;"
    /></button
  >
</article>
<div
  id="exampleOffcanvas"
  class="navbar-nav offcanvas offcanvas-end"
  aria-labelledby="exampleOffcanvasLabel"
  tabindex="-1"
>
  <div class="offcanvas-header bg-dark">
    <h5 id="navigationLabel" class="ms-2 offcanvas-title text-light">Pages</h5>
    <button
      type="button"
      class="me-1 btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    />
  </div>
  <div class="p-0 offcanvas-body">
    {#each links as { href, text } (href)}
      <div data-bs-dismiss="offcanvas">
        <a {href} class="d-flex px-4 nav-link text-body">
          <div class="flex-grow-1">{text}</div>
          <div>
            <IconChevronRight
              style="height: 1em; width: 1em; vertical-align: -0.125em;"
            />
          </div>
        </a>
      </div>
    {/each}
    <hr />
    {#each moreLinks as { href, text } (href)}
      <div data-bs-dismiss="offcanvas">
        <a {href} class="d-flex px-4 nav-link text-body">
          <div class="flex-grow-1">{text}</div>
          <div>
            <IconChevronRight
              style="height: 1em; width: 1em; vertical-align: -0.125em;"
            />
          </div>
        </a>
      </div>
    {/each}
    <div class="mb-4" />
  </div>
</div>

<style lang="scss">
  article {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 50vh;
  }

  .nav-link {
    &:hover {
      background: var(--bs-dark);
    }
  }
</style>
