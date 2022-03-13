<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";
  import { Block } from "~/components/block";
  import { Pagination } from "~/components/pagination";
  import { Page } from "~/layouts/page";

  export const load: Load = async ({ url }) => {
    const query = new URL(url.toString()).searchParams;

    return {
      props: {
        currentPage: Number(query.get("page")) || 1,
      },
    };
  };
</script>

<script lang="ts">
  export let currentPage: number;
  const lastPage = 10;
</script>

<Page title="Pagination" />
<h1 class="mb-5">Pagination</h1>
<p class="mb-5 text-center" aria-label="Pagination information">
  {#each Array(lastPage) as _, i}
    <Block
      class="me-1"
      size={20}
      color={currentPage > i ? "#e5b53a" : "#35333c"}
    />
  {/each}
</p>
<Pagination {currentPage} {lastPage} class="mb-5" />
