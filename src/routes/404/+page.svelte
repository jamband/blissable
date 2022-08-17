<script lang="ts">
  import { IconChevronLeft, IconInfoCircleFill } from "../../icons";
  import { Page } from "../../layouts/page";
  import { siteHealth } from "../../stores/site-health";

  siteHealth.set("bad");
</script>

<Page title="Not Found" />
<h1>Not Found</h1>
<p><IconInfoCircleFill size="0.9em" class="me-1" />Page not found.</p>
<div class="mt-5 text-center">
  <a href="/"><IconChevronLeft size="0.7em" class="me-2" />Back to Home</a>
</div>
