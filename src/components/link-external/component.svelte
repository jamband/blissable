<script lang="ts">
  export let href: string;
</script>

<a class={$$props.class || ""} {href} rel="noopener noreferrer" target="_blank"
  ><slot /></a
>
