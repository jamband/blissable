<script lang="ts">
  let className = "";
  export { className as class };
  export let size: number;
  export let color: string;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={className || undefined}
  viewBox="0 0 {size} {size}"
  role="img"
  aria-label="Block"
>
  <rect width={size} height={size} rx="2" ry="2" fill={color} />
</svg>
