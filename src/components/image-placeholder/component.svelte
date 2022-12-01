<script lang="ts">
  let className = "";
  export { className as class };
  export let text: string;
  export let textSize: `${string}em` | `${string}rem`;
  export let textFill: `#${string}`;
  export let rectFill: `#${string}`;
  export let height = 140;
</script>

<svg
  class={className || undefined}
  width="100%"
  {height}
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="Placeholder: Image cap"
  preserveAspectRatio="xMidYMid slice"
  focusable="false"
  style="font-size: {textSize};"
>
  <title>Placeholder</title>
  <rect width="100%" height="100%" fill={rectFill} />
  <text x="50%" y="50%" fill={textFill} dy="0.3em">{text}</text>
</svg>

<style lang="scss" src="./style.scss">
</style>
