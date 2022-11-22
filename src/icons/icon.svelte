<script lang="ts">
  export let fill: string;
  export let viewBox: `${number} ${number} ${number} ${number}`;
  export let style: string;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {fill}
  {viewBox}
  class={`d-inline-block ${$$props.class || ""}`}
  {style}
>
  <slot />
</svg>
