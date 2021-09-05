<script lang="ts">
  import { LinkExternal } from "~/components/link-external";
  import { IconGitHub, IconTwitter } from "~/icons";
  import { Page } from "~/layouts/page";
</script>

<Page title="Contact" />
<h1>Contact</h1>
<p>
  Please to the message via
  <LinkExternal
    class="text-success text-decoration-underline"
    href="https://twitter.com/livejam_db"
    ><IconTwitter class="me-1" />Twitter</LinkExternal
  > or
  <LinkExternal
    class="text-success text-decoration-underline"
    href="https://github.com/jamband/blissable/issues"
    ><IconGitHub class="me-1" />GitHub Issues</LinkExternal
  >.
</p>
