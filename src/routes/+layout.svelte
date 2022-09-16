<script lang="ts">
  import { beforeNavigate } from "$app/navigation";
  import { Notification } from "~/components/notification";
  import { APP_DESCRIPTION } from "~/constants/app";
  import { Footer } from "~/layouts/footer";
  import { Header } from "~/layouts/header";
  import { Loading } from "~/layouts/loading";
  import { siteHealth } from "~/stores/site-health";
  import "~/styles/app.scss";

  beforeNavigate(() => {
    if ($siteHealth !== "good") {
      siteHealth.set("good");
    }
  });
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
</svelte:head>

<div class="d-flex flex-column min-vh-100 py-8">
  <Header />
  <Loading />
  <Notification />
  <div class="container flex-grow-1">
    <slot />
  </div>
  <Footer />
</div>
