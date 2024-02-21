<script lang="ts">
  import { IconInfoCircleFill } from "@/icons/info-circle-fill";
  import { Page } from "@/layouts/page";
  import { notification } from "@/stores/notification";

  const now = () => {
    const date = new Date();

    const weekday = date.toLocaleDateString("en", {
      weekday: "short",
    });

    const time = date.toLocaleTimeString("en", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });

    return `${weekday} ${time}`;
  };

  const show = () => {
    notification.show({
      message: now(),
      delay: 5000,
    });
  };
</script>

<Page title="Toast" />
<h1 class="mb-3">Toast</h1>
<button
  type="button"
  class="btn btn-primary"
  disabled={$notification.show}
  on:click={show}>Show Current Time</button
>
<div class="mt-3 p-3 bg-dark text-body rounded">
  <IconInfoCircleFill
    style="height: 1em; width: 1em; vertical-align: -0.125em;"
  />
  This notification will continue to be displayed for a certain period of time no
  matter which page you go to.
</div>
