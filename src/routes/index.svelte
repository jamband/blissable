<script lang="ts">
  import { IconChevronRight } from "~/icons";
  import { Page } from "~/layouts/page";
  import type { Link } from "~/types/link";

  export let links: Link[];
</script>

<Page />
<ul class="list-unstyled">
  {#each links as { href, text } (href)}
    <li class="mb-3">
      <h2>
        <a sveltekit:prefetch {href}
          >{text}<IconChevronRight size="0.5em" class="ms-2" /></a
        >
      </h2>
    </li>
  {/each}
</ul>
