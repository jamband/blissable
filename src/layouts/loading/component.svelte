<script lang="ts">
  import { navigating } from "$app/stores";
  import { Loading } from "$components/loading";
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

<div class="loading">
  {#if loading}
    <Loading />
  {:else if $siteHealth === "bad"}
    <IconEmojiFrownFill />
  {:else}
    <IconEmojiSmileFill />
  {/if}
</div>

<style lang="scss" src="./style.scss">
</style>
