<script lang="ts">
  import { LinkExternal } from "~/components/link-external";
  import { IconGitHub, IconTwitter } from "~/icons";
  import { Page } from "~/layouts/page";
</script>

<Page title="Contact" />
<h1>Contact</h1>
<p>
  Please to the message via
  <LinkExternal href="https://twitter.com/livejam_db"
    ><IconTwitter
      class="me-1"
      style="height: 1em; width: 1em; vertical-align: -0.125em;"
    />Twitter</LinkExternal
  > or
  <LinkExternal href="https://github.com/jamband/blissable/issues"
    ><IconGitHub
      class="me-1"
      style="width: 1em; height: 1em; vertical-align: -0.125em;"
    />GitHub Issues</LinkExternal
  >.
</p>
