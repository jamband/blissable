<script lang="ts">
  import Icon from "./icon.svelte";
  export let size: `${number}em` = "1em";
</script>

<Icon class={$$props.class} {size}>
  <path
    fill-rule="evenodd"
    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
  />
</Icon>
