<script lang="ts">
  import { ImagePlaceholder } from "@/components/image-placeholder";
  import { Page } from "@/layouts/page";

  type Ratio = "21x9" | "16x9" | "4x3" | "1x1";

  let ratio: Ratio;
  const ratios: Ratio[] = ["21x9", "16x9", "4x3", "1x1"];

  const setRatio = (value: Ratio) => {
    ratio = value;
  };
</script>

<Page title="Ratio" />
<h1>Ratio</h1>
<div class="row">
  <div class="my-3 btn-group">
    {#each ratios as ratio}
      <button
        type="button"
        class="btn btn-primary w-25 font-monospace"
        aria-label="Aspect ratio: {ratio}"
        on:click={() => setRatio(ratio)}>{ratio}</button
      >
    {/each}
  </div>
</div>
{#if ratio}
  <div class="ratio ratio-{ratio}">
    <ImagePlaceholder
      text={ratio}
      textSize="5em"
      textFill="#b7b4c7"
      rectFill="#24222b"
      class="rounded shadow-sm font-monospace"
    />
  </div>
{/if}
