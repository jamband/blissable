<script lang="ts">
  import Icon from "./icon.svelte";
  export let style: string;
</script>

<Icon fill="currentColor" viewBox="0 0 16 16" class={$$props.class} {style}>
  <path
    fill-rule="evenodd"
    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
  />
</Icon>
