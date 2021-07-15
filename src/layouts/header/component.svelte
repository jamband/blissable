<script lang="ts">
  import { navigating } from "$app/stores";
  import { Loading } from "$components/loading";
  import { APP_NAME } from "$constants/app";
  import { IconEmojiFrownFill, IconEmojiSmileFill } from "$icons";
  import { siteHealth } from "$stores/site-health";

  let loading = false;

  $: if ($navigating) {
    loading = true;
  }

  $: if (!$navigating) {
    setTimeout(() => (loading = false), 250);
  }
</script>

<header class="fixed-top text-center py-3 bg-dark fw-bold">
  <a class="me-1 text-primary" href="/">{APP_NAME}</a>
  {#if loading}
    <Loading />
  {:else if $siteHealth === "bad"}
    <IconEmojiFrownFill />
  {:else}
    <IconEmojiSmileFill />
  {/if}
</header>
