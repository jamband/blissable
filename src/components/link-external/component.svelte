<script lang="ts">
  let className = "";
  export { className as class };
  export let href: string;
</script>

<a
  class={className || undefined}
  {href}
  rel="noopener noreferrer"
  target="_blank"><slot /></a
>
