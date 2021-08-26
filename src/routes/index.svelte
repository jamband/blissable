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
  <ul class="list-unstyled">
    <li>
      <h2>
        <a sveltekit:prefetch {href}
          >{text}<IconChevronRight size="0.5em" class="ms-2" /></a
        >
      </h2>
    </li>
  </ul>
{/each}
