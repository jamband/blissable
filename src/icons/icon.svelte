<script lang="ts">
  export let size: `${number}em`;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height="1em"
  fill="currentColor"
  viewBox="0 0 16 16"
  class={$$props.class || ""}
  style="display: inline-block; vertical-align: -0.125em;"
>
  <slot />
</svg>
