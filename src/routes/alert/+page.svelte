<script lang="ts">
  import { Alert } from "@/components/alert";
  import { APP_DESCRIPTION } from "@/constants/app";
  import { IconInfoCircleFill } from "@/icons/info-circle-fill";
  import { Page } from "@/layouts/page";

  const reload = () => {
    window.location.reload();
  };
</script>

<Page title="Alert" />
<h1>Alert</h1>
<div class="my-3 text-end">
  <button type="button" class="btn btn-primary" on:click={reload}>Reload</button
  >
</div>
<Alert class="show bg-dark" dismissible>
  <IconInfoCircleFill
    style="height: 1em; width: 1em; vertical-align: -0.125em;"
  />
  {APP_DESCRIPTION}
</Alert>
