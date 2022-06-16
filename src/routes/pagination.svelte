<script lang="ts">
  import { page } from "$app/stores";
  import { Block } from "../components/block";
  import { Pagination } from "../components/pagination";
  import { Page } from "../layouts/page";

  $: currentPage = Number($page.url.searchParams.get("page")) || 1;
  const lastPage = 10;
</script>

<Page title="Pagination" />
<h1 class="mb-5">Pagination</h1>
<p class="mb-5 text-center" aria-label="Pagination information">
  {#each Array(lastPage) as _, i}
    <Block
      class="me-1"
      size={20}
      color={currentPage > i ? "#f7d68e" : "#35333c"}
    />
  {/each}
</p>
<Pagination {currentPage} {lastPage} class="mb-5" />
