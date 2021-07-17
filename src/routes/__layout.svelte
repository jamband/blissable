<script lang="ts">
  import { navigating } from "$app/stores";
  import { Notification } from "$components/notification";
  import { APP_DESCRIPTION } from "$constants/app";
  import { Footer } from "$layouts/footer";
  import { Header } from "$layouts/header";
  import { siteHealth } from "$stores/site-health";
  import "$styles/app.scss";

  $: if ($navigating && $siteHealth !== "good") {
    siteHealth.set("good");
  }
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
</svelte:head>

<div class="d-flex flex-column min-vh-100 py-7">
  <Header />
  <Notification />
  <div class="container flex-grow-1">
    <slot />
  </div>
  <Footer />
</div>
