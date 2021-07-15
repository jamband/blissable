<script lang="ts" context="module">
  import type { LoadInput } from "@sveltejs/kit";
  import type { Link } from "$types/link";

  export const load = async ({ fetch }: LoadInput) => {
    const _links = await fetch("/api/links");
    const links = (await _links.json()) as Link[];
    links.shift();

    return {
      props: {
        links,
      },
    };
  };
</script>

<script lang="ts">
  import { IconChevronRight } from "$icons";
  import { Page } from "$layouts/page";

  export let links: Link[];
</script>

<Page />
{#each links as { href, text } (href)}
  <a {href} class="p-1 ps-3 h2 nav-link"
    >{text}<IconChevronRight size="0.6em" class="ms-1" /></a
  >
{/each}

<style lang="scss">
  @import "../styles/variables";

  .nav-link {
    border-radius: $border-radius;

    &:hover {
      background-color: var(--bs-secondary);
    }
  }
</style>
