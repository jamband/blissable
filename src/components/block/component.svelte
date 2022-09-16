<script lang="ts">
  export let size: number;
  export let color: string;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={$$props.class || ""}
  viewBox="0 0 {size} {size}"
  role="img"
  aria-label="Block"
>
  <rect width={size} height={size} rx="2" ry="2" fill={color} />
</svg>
