<script lang="ts">
  let className = "";
  export { className as class };
  export let color: `#${string}`;
  export let text: string;
</script>

<button
  {...$$restProps}
  type="button"
  class="me-2 mb-3 ps-1 pe-3 py-1 btn rounded-pill {className}"
  on:click
>
  <svg
    class="rounded-pill"
    width="30"
    height="30"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Placeholder: Image cap"
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
  >
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill={color} />
  </svg>
  <div class="d-inline position-relative" style="top: 1px;">
    {text}
  </div>
</button>
