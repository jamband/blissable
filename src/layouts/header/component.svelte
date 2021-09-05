<script lang="ts">
  import { APP_NAME } from "~/constants/app";
  import { Loading } from "~/layouts/loading";
</script>

<header class="fixed-top py-3 text-center bg-dark fw-bold">
  <a class="p-2 text-primary" href="/">{APP_NAME}</a>
  <Loading />
</header>
