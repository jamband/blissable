<script lang="ts">
  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import { Loading } from "~/components/loading";
  import { IconEmojiFrownFill, IconEmojiSmileFill } from "~/icons";
  import { siteHealth } from "~/stores/site-health";

  let loading = false;

  beforeNavigate(() => {
    loading = true;
  });

  afterNavigate(() => {
    setTimeout(() => (loading = false), 250);
  });
</script>

<div class="loading">
  {#if loading}
    <Loading />
  {:else if $siteHealth === "bad"}
    <IconEmojiFrownFill
      style="height: 1em; width: 1em; vertical-align: -0.125em;"
    />
  {:else}
    <IconEmojiSmileFill
      style="height: 1em; width: 1em; vertical-align: -0.125em;"
    />
  {/if}
</div>

<style lang="scss" src="./style.scss">
</style>
