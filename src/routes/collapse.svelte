<script lang="ts">
  import { onMount } from "svelte";
  import { Button } from "~/components/button";
  import { APP_DESCRIPTION } from "~/constants/app";
  import { IconInfoCircleFill } from "~/icons";
  import { Page } from "~/layouts/page";

  let show = false;

  const toggle = () => {
    show = !show;
  };

  onMount(() => {
    import("bootstrap/js/dist/collapse");
  });
</script>

<Page title="Collapse" />
<h1>Collapse</h1>
<p class="my-3">
  <Button
    class="w-25 btn-sm"
    data-bs-toggle="collapse"
    data-bs-target="#exampleCollapse"
    aria-expanded="false"
    aria-controls="exampleCollapse"
    on:click={toggle}
  >
    {show ? "Hide" : "Show"}
  </Button>
</p>
<div id="exampleCollapse" class="collapse">
  <div class="p-3 bg-secondary rounded">
    <IconInfoCircleFill class="me-1" />{APP_DESCRIPTION}
  </div>
</div>
