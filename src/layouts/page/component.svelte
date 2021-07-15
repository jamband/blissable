<script lang="ts">
  import { APP_NAME } from "$constants/app";
  import { Breadcrumb } from "$layouts/breadcrumb";

  export let title = "";
  title = title ? `${title} ･ ${APP_NAME}` : APP_NAME;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Breadcrumb {title} />
