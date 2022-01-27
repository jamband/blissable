<script lang="ts" context="module">
  export const load = async ({ url }: LoadInput) => {
    const query = new URL(url.toString()).searchParams;

    return {
      props: {
        currentPage: Number(query.get("page")) || 1,
      },
    };
  };
</script>

<script lang="ts">
  import type { LoadInput } from "@sveltejs/kit";
  import { Block } from "~/components/block";
  import { Pagination } from "~/components/pagination";
  import { IconInfoCircleFill } from "~/icons";
  import { Page } from "~/layouts/page";

  const lastPage = 10;
  export let currentPage: number;
</script>

<Page title="Pagination" />
<h1 class="mb-5">Pagination</h1>
<p class="mb-5 text-center" aria-label="Pagination information">
  {#each Array(lastPage) as _, i}
    <Block
      class="me-1"
      size={20}
      color={currentPage > i ? "#adbad1" : "#516790"}
    />
  {/each}
</p>
<Pagination {currentPage} {lastPage} class="mb-5" />
<p class="alert bg-secondary">
  <IconInfoCircleFill />
  Please note that this page is SSG, so the URL and page status may differ if you
  reload your browser.
</p>
