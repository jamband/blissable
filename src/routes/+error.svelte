<script lang="ts">
  import { page } from "$app/stores";
  import { IconChevronLeft, IconInfoCircleFill } from "~/icons";
  import { Page } from "~/layouts/page";
  import { siteHealth } from "~/stores/site-health";

  const isNotFound = $page.status === 404;
  const title = isNotFound ? "Not Found" : "An Error occured";
  const message = isNotFound ? "Page not found" : "An Error occured.";

  siteHealth.set("bad");
</script>

<Page {title} />
<h1>{title}</h1>
<p><IconInfoCircleFill size="0.9em" class="me-1" />{message}</p>
<div class="mt-5 text-center">
  <a href="/"><IconChevronLeft size="0.7em" class="me-2" />Back to Home</a>
</div>
