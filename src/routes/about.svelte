<script lang="ts">
  import { LinkExternal } from "~/components/link-external";
  import { APP_DESCRIPTION } from "~/constants/app";
  import { IconGitHub } from "~/icons";
  import { Page } from "~/layouts/page";
</script>

<Page title="About" />
<h1>About</h1>
<p>{APP_DESCRIPTION}</p>
<p>
  This website is an open source project. See
  <LinkExternal href="https://github.com/jamband/blissable"
    ><IconGitHub class="me-1" />GitHub jamband/blissable</LinkExternal
  >
  for details.
</p>
