<script lang="ts" context="module">
  import type { LoadInput } from "@sveltejs/kit";
  import type { Link } from "$types/link";

  export const load = async ({ fetch }: LoadInput) => {
    const links = await fetch("/links.json");

    return {
      props: {
        links: await links.json(),
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
  <ul class="nav flex-column">
    <li class="nav-item">
      <h2>
        <a sveltekit:prefetch {href} class="nav-link"
          >{text}<IconChevronRight size="0.6em" class="ms-1" /></a
        >
      </h2>
    </li>
  </ul>
{/each}

<style lang="scss">
  @import "../styles/variables";

  a {
    border-radius: $border-radius;

    &:hover {
      background-color: var(--bs-secondary);
    }
  }
</style>
