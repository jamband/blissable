<script lang="ts">
  import { onMount } from "svelte";
  import { Block } from "~/components/block";
  import { IconChevronLeft, IconChevronRight } from "~/icons";
  import { Page } from "~/layouts/page";
  import { hasTouchScreen } from "~/utils/screen";

  type Part = "First" | "Previous" | "Next" | "Last";

  const parts: Array<Part> = ["First", "Previous", "Next", "Last"];

  let currentPage = 1;
  const lastPage = 10;

  $: disabled = (part: Part) => {
    return ["First", "Previous"].includes(part)
      ? currentPage < 2
      : currentPage >= lastPage;
  };

  $: setPage = (part: Part) => {
    if (part === "First") currentPage = 1;
    if (part === "Previous") currentPage -= 1;
    if (part === "Next") currentPage += 1;
    if (part === "Last") currentPage = lastPage;
  };

  const icon = (part: Part) => {
    return part === "First" || part === "Previous"
      ? IconChevronLeft
      : IconChevronRight;
  };

  let _hasTouchScreen: boolean;

  onMount(() => {
    _hasTouchScreen = hasTouchScreen();
  });
</script>

<Page title="Pagination" />
<h1 class="mb-5">Pagination</h1>
<div class="mb-5 text-center" aria-label="Pagination information">
  {#each Array(lastPage) as _, i}
    <Block
      class="me-1"
      size={20}
      color={currentPage > i ? "#f7d68e" : "#35333c"}
    />
  {/each}
</div>
<nav aria-label="Page navigation">
  <ul class="pagination text-center">
    {#each parts as part (part)}
      <li class="page-item w-25" class:disabled={disabled(part)}>
        <a
          href="/pagination#{currentPage}"
          class="page-link"
          class:clickable={!_hasTouchScreen}
          aria-disabled={disabled(part)}
          tabindex={disabled(part) ? -1 : 0}
          on:click={() => setPage(part)}
        >
          <svelte:component
            this={icon(part)}
            style="height: 1em; width: 1em; vertical-align: -0.125em;"
          />
          <div class="text">{part}</div>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  @import "../../styles/variables";
  @import "../../../node_modules/bootstrap/scss/mixins/breakpoints";

  .clickable {
    &:hover {
      background: var(--bs-dark);
      color: var(--bs-light);
    }
  }

  .text {
    @include media-breakpoint-down(sm) {
      font-size: 80%;
    }
  }
</style>
