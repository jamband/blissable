<script lang="ts">
  import { APP_DESCRIPTION } from "@/constants/app";
  import { IconGitHub } from "@/icons";
  import { Page } from "@/layouts/page";
</script>

<Page title="About" />
<h1>About</h1>
<p>{APP_DESCRIPTION}</p>
<p>
  This website is an open source project. See
  <a
    href="https://github.com/jamband/blissable"
    target="_blank"
    rel="noreferrer"
    ><IconGitHub
      class="me-1"
      style="height: 1em; width: 1em; vertical-align: -0.125em;"
    />GitHub jamband/blissable</a
  >
  for details.
</p>
