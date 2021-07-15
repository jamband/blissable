<script lang="ts">
  import { Button } from "$components/button";
  import { IconInfoCircleFill } from "$icons";
  import { Page } from "$layouts/page";
  import { notification } from "$stores/notification";

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
<Button on:click={show}>Show Current Time</Button>
<div class="mt-3 p-3 bg-secondary rounded">
  <IconInfoCircleFill />
  This notification will continue to be displayed for a certain period of time no
  matter which page you go to.
</div>
