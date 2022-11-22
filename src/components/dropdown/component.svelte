<script lang="ts">
  import { onMount } from "svelte";
  import { IconChevronDown } from "~/icons";

  export let id: string;
  export let label: string;
  export let buttonStyles: string;

  onMount(async () => {
    await import("bootstrap/js/dist/dropdown");
  });
</script>

<div class="d-inline-block {$$props.class || ''}">
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
