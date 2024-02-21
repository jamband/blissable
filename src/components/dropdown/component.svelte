<script lang="ts">
  import { IconChevronDown } from "@/icons/chevron-down";
  import { onMount } from "svelte";

  let className = "";
  export { className as class };
  export let id: string;
  export let label: string;
  export let buttonStyles: string;

  onMount(async () => {
    await import("bootstrap/js/dist/dropdown");
  });
</script>

<div class="d-inline-block {className}">
  <button
    {id}
    class="btn {buttonStyles}"
    data-bs-toggle="dropdown"
    data-bs-offset="-3,5"
    aria-expanded="false"
  >
    {label}
    <IconChevronDown
      style="height: 1em; width: 1em; vertical-align: -0.125em;"
    />
  </button>
  <div class="dropdown-menu" aria-labelledby={id}>
    <slot />
  </div>
</div>
