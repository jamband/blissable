<script lang="ts">
  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import { Loading } from "@/components/loading";
  import { IconEmojiFrownFill } from "@/icons/emoji-frown-fill";
  import { IconEmojiSmileFill } from "@/icons/emoji-smile-fill";
  import { siteHealth } from "@/stores/site-health";

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

<style lang="scss">
  .loading {
    color: var(--bs-light);
    left: 0;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    right: 0;
    text-align: center;
    top: 80px;
  }
</style>
