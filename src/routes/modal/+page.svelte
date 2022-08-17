<script lang="ts">
  import { onMount } from "svelte";
  import { ImageBadge } from "../components/image-badge";
  import { ImagePlaceholder } from "../components/image-placeholder";
  import { Page } from "../layouts/page";

  type Image = {
    color: `#${string}`;
    text: string;
  };

  let color: `#${string}`;
  let text: string;

  const images: Image[] = [
    { color: "#ed7c7c", text: "red" },
    { color: "#4b9c69", text: "green" },
    { color: "#74a7e6", text: "blue" },
  ];

  const setImage = (image: Image) => {
    color = image.color;
    text = image.text;
  };

  onMount(() => {
    import("bootstrap/js/dist/modal");
  });
</script>

<Page title="Modal" />
<h1>Modal</h1>
{#each images as image (image.color)}
  <ImageBadge
    class="font-monospace"
    color={image.color}
    text={image.text}
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    on:click={() => setImage(image)}
  />
{/each}
<div
  id="exampleModal"
  class="modal fade"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <ImagePlaceholder
      height={300}
      {text}
      textSize="3em"
      textFill="#262b34"
      rectFill={color}
      class="font-monospace rounded"
    />
  </div>
</div>
