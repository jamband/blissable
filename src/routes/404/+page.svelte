<script lang="ts">
  import { IconChevronLeft, IconInfoCircleFill } from "~/icons";
  import { Page } from "~/layouts/page";
  import { siteHealth } from "~/stores/site-health";

  siteHealth.set("bad");
</script>

<Page title="Not Found" />
<h1>Not Found</h1>
<p>
  <IconInfoCircleFill
    class="me-1"
    style="height: 1em; width: 1em; vertical-align: -0.125em;"
  />Page not found.
</p>
<div class="mt-5 text-center">
  <a href="/"
    ><IconChevronLeft
      class="me-2"
      style="height: 1em; width: 1em; vertical-align: -0.125em;"
    />Back to Home</a
  >
</div>
