<script lang="ts">
  import { onMount } from "svelte";
  import { Button } from "~/components/button";
  import { IconChevronRight } from "~/icons";
  import { Page } from "~/layouts/page";
  import type { Link } from "~/types/link";

  export let links: Link[];
  export let moreLinks: Link[];

  onMount(() => {
    import("bootstrap/js/dist/offcanvas");
  });
</script>

<Page title="Offcanvas" />
<h1>Offcanvas</h1>
<article>
  <Button
    class="fw-bold"
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
    <h5 id="navigationLabel" class="ms-2 offcanvas-title">Pages</h5>
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
        <a {href} class="d-flex px-4 nav-link">
          <div class="flex-grow-1">{text}</div>
          <div><IconChevronRight size="0.8em" /></div>
        </a>
      </div>
    {/each}
    <hr />
    {#each moreLinks as { href, text } (href)}
      <div data-bs-dismiss="offcanvas">
        <a {href} class="d-flex px-4 nav-link">
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
      background-color: var(--bs-secondary);
    }
  }
</style>
