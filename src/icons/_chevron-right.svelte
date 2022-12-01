<script lang="ts">
  import Icon from "./icon.svelte";

  let className = "";
  export { className as class };
  export let style: string;
</script>

<Icon
  fill="currentColor"
  viewBox="0 0 16 16"
  class={className || undefined}
  {style}
>
  <path
    fill-rule="evenodd"
    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
  />
</Icon>
