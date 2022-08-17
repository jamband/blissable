<script lang="ts">
  import { onMount } from "svelte";
  import { Button } from "../../components/button";
  import { IconChevronRight } from "../../icons";
  import { Page } from "../../layouts/page";

  const links = [
    { href: "/", text: "Home" },
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
  ];

  const moreLinks = [
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
    { href: "https://github.com/jamband/blissable", text: "GitHub" },
  ];

  onMount(() => {
    import("bootstrap/js/dist/offcanvas");
  });
</script>

<Page title="Offcanvas" />
<h1>Offcanvas</h1>
<article>
  <Button
    class="btn-dark"
    data-bs-toggle="offcanvas"
    data-bs-target="#exampleOffcanvas"
    aria-controls="exampleOffcanvas"
    >Go to Pages <IconChevronRight size="0.6em" class="ms-1" /></Button
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
          <div><IconChevronRight size="0.8em" /></div>
        </a>
      </div>
    {/each}
    <hr />
    {#each moreLinks as { href, text } (href)}
      <div data-bs-dismiss="offcanvas">
        <a {href} class="d-flex px-4 nav-link text-body">
          <div class="flex-grow-1">{text}</div>
          <div><IconChevronRight size="0.8em" /></div>
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
