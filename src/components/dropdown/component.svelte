<script lang="ts">
  import { IconChevronDown } from "~/icons";
  import { onMount } from "svelte";

  export let id: string;
  export let label: string;

  onMount(() => {
    import("bootstrap/js/dist/dropdown");
  });
</script>

<div class="d-inline-block {$$props.class || ''}">
  <button
    {id}
    class="btn btn-link text-decoration-none text-body"
    data-bs-toggle="dropdown"
    data-bs-offset="-3,5"
    aria-expanded="false"
  >
    {label}
    <IconChevronDown size="0.8em" />
  </button>
  <div class="dropdown-menu" aria-labelledby={id}>
    <slot />
  </div>
</div>
