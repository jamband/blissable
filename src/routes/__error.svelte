<script lang="ts" context="module">
  import type { ErrorLoad } from "@sveltejs/kit";
  import { IconChevronLeft, IconInfoCircleFill } from "~/icons";
  import { Page } from "~/layouts/page";
  import { siteHealth } from "~/stores/site-health";

  export const load: ErrorLoad = async ({ status }) => {
    const isNotFound = status === 404;

    return {
      props: {
        title: isNotFound ? "Not Found" : "An Error occured",
        message: isNotFound ? "Page not found." : "An Error occured.",
      },
    };
  };
</script>

<script lang="ts">
  export let title: string;
  export let message: string;

  siteHealth.set("bad");
</script>

<Page {title} />
<h1>{title}</h1>
<p><IconInfoCircleFill size="0.9em" class="me-1" />{message}</p>
<div class="mt-5 text-center">
  <a href="/"><IconChevronLeft size="0.7em" class="me-2" />Back to Home</a>
</div>
