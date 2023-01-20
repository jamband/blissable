<script lang="ts">
  import { APP_DESCRIPTION } from "@/constants/app";
  import { IconInfoCircleFill } from "@/icons";
  import { Page } from "@/layouts/page";
  import { onMount } from "svelte";

  let show = false;
  let disabled = false;
  let collapseRef: HTMLDivElement;

  const toggle = () => {
    disabled = true;
    show = !show;

    collapseRef.addEventListener("shown.bs.collapse", () => {
      disabled = false;
    });

    collapseRef.addEventListener("hidden.bs.collapse", () => {
      disabled = false;
    });
  };

  onMount(() => {
    import("bootstrap/js/dist/collapse");
  });
</script>

<Page title="Collapse" />
<h1>Collapse</h1>
<p class="my-3">
  <button
    {disabled}
    class="w-25 btn btn-primary"
    data-bs-toggle="collapse"
    data-bs-target="#exampleCollapse"
    aria-expanded="false"
    aria-controls="exampleCollapse"
    on:click={toggle}
  >
    {show ? "Hide" : "Show"}
  </button>
</p>
<div bind:this={collapseRef} id="exampleCollapse" class="collapse">
  <div class="p-3 bg-dark text-body rounded">
    <IconInfoCircleFill
      class="me-1"
      style="height: 1em; width: 1em; vertical-align: -0.125em;"
    />{APP_DESCRIPTION}
  </div>
</div>
