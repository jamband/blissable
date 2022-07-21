<script lang="ts">
  import { Alert } from "../components/alert";
  import { Button } from "../components/button";
  import { APP_DESCRIPTION } from "../constants/app";
  import { IconInfoCircleFill } from "../icons";
  import { Page } from "../layouts/page";

  const reload = () => {
    window.location.reload();
  };
</script>

<Page title="Alert" />
<h1>Alert</h1>
<div class="my-3 text-end">
  <Button on:click={reload} class="btn-dark">Reload</Button>
</div>
<Alert class="show bg-dark" dismissible>
  <IconInfoCircleFill />
  {APP_DESCRIPTION}
</Alert>
