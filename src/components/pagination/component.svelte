<script lang="ts">
  import { onMount } from "svelte";
  import { IconChevronLeft, IconChevronRight } from "$icons";
  import type { Part } from "$types/pagination";
  import { hasTouchScreen } from "$utils/screen";

  export let currentPage: number;
  export let lastPage: number;

  $: disabled = (part: Part) => {
    return ["first", "previous"].includes(part)
      ? currentPage < 2
      : currentPage >= lastPage;
  };

  $: itemClass = (part: Part) => {
    let selector = "page-item w-25";
    if (disabled(part)) {
      selector += " disabled";
    }
    return selector;
  };

  $: link = (part: Part) => {
    let page = 1;
    if (part === "previous" && currentPage > 1) {
      page = currentPage - 1;
    } else if (part === "next" && currentPage === lastPage) {
      page = lastPage;
    } else if (part === "next" && currentPage !== lastPage) {
      page = currentPage + 1;
    } else if (part === "last") {
      page = lastPage;
    }

    return `?page=${page}`;
  };

  let _hasTouchScreen: boolean;

  onMount(() => {
    _hasTouchScreen = hasTouchScreen();
  });
</script>

<nav class={$$props.class || ""} aria-label="Page navigation">
  <ul class="pagination text-center">
    <li class={itemClass("first")}>
      <a
        href={link("first")}
        class="page-link"
        class:clickable={!_hasTouchScreen}
        aria-disabled={disabled("first")}
        tabindex={disabled("first") ? -1 : 0}
        ><IconChevronLeft size="0.8em" />
        <div class="text">First</div></a
      >
    </li>
    <li class={itemClass("previous")}>
      <a
        href={link("previous")}
        class="page-link"
        class:clickable={!_hasTouchScreen}
        aria-disabled={disabled("first")}
        tabindex={disabled("previous") ? -1 : 0}
        ><IconChevronLeft size="0.8em" />
        <div class="text">Previous</div></a
      >
    </li>
    <li class={itemClass("next")}>
      <a
        href={link("next")}
        class="page-link"
        class:clickable={!_hasTouchScreen}
        aria-disabled={disabled("first")}
        tabindex={disabled("next") ? -1 : 0}
        ><IconChevronRight size="0.8em" />
        <div class="text">Next</div></a
      >
    </li>
    <li class={itemClass("last")}>
      <a
        href={link("last")}
        class="page-link"
        class:clickable={!_hasTouchScreen}
        aria-disabled={disabled("first")}
        tabindex={disabled("last") ? -1 : 0}
        ><IconChevronRight size="0.8em" />
        <div class="text">Last</div></a
      >
    </li>
  </ul>
</nav>

<style lang="scss" src="./style.scss">
</style>
