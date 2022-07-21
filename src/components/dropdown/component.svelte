<script lang="ts">
  import { onMount } from "svelte";
  import { IconChevronDown } from "../../icons";
  import { Button } from "../button";

  export let id: string;
  export let label: string;

  onMount(async () => {
    await import("bootstrap/js/dist/dropdown");
  });
</script>

<div class="d-inline-block {$$props.class || ''}">
  <Button
    {id}
    class="text-decoration-none btn-outline-dark shadow-none border-0 text-body"
    data-bs-toggle="dropdown"
    data-bs-offset="-3,5"
    aria-expanded="false"
  >
    {label}
    <IconChevronDown size="0.8em" />
  </Button>
  <div class="dropdown-menu" aria-labelledby={id}>
    <slot />
  </div>
</div>
