<script lang="ts">
  import { onMount } from "svelte";

  export let dismissible = false;

  onMount(() => {
    import("bootstrap/js/dist/alert");
  });
</script>

<div>
  <div
    class="alert fade {$$props.class || ''}"
    class:alert-dismissible={dismissible}
    role="alert"
  >
    <slot />
    {#if dismissible}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      />
    {/if}
  </div>
</div>
