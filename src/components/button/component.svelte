<script lang="ts">
  export let disabled = false;
</script>

<button
  {...$$restProps}
  type="button"
  class="btn {$$props.class || ''}"
  {disabled}
  aria-disabled={disabled}
  on:click><slot /></button
>

<style lang="scss" src="./style.scss">
</style>
