<script lang="ts">
  export let button = false;
</script>

{#if button}
  <button class="dropdown-item" on:click><slot /></button>
{:else}
  <div class="dropdown-item">
    <slot />
  </div>
{/if}
