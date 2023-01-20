<script lang="ts">
  import { Page } from "@/layouts/page";

  type ToggleText = "Continue" | "Pause" | "Start";

  let bar = 0;
  let toggleText: ToggleText = "Start";
  let interval: number;

  $: isCompleted = bar === 100;

  const toggle = () => {
    if (["Start", "Continue"].includes(toggleText)) {
      toggleText = "Pause";

      interval = window.setInterval(() => {
        if (isCompleted) return;
        bar++;
      }, 100);
    } else {
      stop();
      toggleText = "Continue";
    }
  };

  const stop = () => {
    clearInterval(interval);
  };

  const clear = () => {
    stop();
    bar = 0;
    toggleText = "Start";
  };
</script>

<Page title="Progress" />
<h1>Progress</h1>
<div
  class="my-3 btn-group btn-group-sm w-50"
  role="group"
  aria-label="Progress"
>
  <button
    type="button"
    class="btn btn-primary w-50"
    disabled={isCompleted}
    on:click={toggle}>{toggleText}</button
  >
  <button
    type="button"
    class="btn btn-primary w-50"
    disabled={bar === 0}
    on:click={clear}>Clear</button
  >
</div>
<div class="mt-3 mb-1 progress" style="height: 0.25rem;">
  <div
    class="progress-bar"
    style="width: {bar}%;"
    role="progressbar"
    aria-valuenow={bar}
    aria-valuemin={0}
    aria-valuemax={100}
  />
</div>
<div class="text-center font-monospace small" aria-label="Progress">
  {#if toggleText === "Pause" && !isCompleted}
    Loading...
  {/if}
  {isCompleted ? "Completed!" : `${bar}%`}
</div>
