<script lang="ts">
  import { LinkExternal } from "~/components/link-external";
</script>

<footer class="fixed-bottom py-3 text-center bg-dark">
  <nav aria-label="Footer navigation">
    <ul class="m-0 list-inline">
      <li class="list-inline-item">
        <a sveltekit:prefetch class="px-3 py-2" href="/about">About</a>
      </li>
      <li class="list-inline-item">
        <a sveltekit:prefetch class="px-3 py-2" href="/contact">Contact</a>
      </li>
      <li class="list-inline-item">
        <LinkExternal
          href="https://github.com/jamband/blissable"
          class="px-3 py-2">GitHub</LinkExternal
        >
      </li>
    </ul>
  </nav>
</footer>

<style>
  nav {
    padding-bottom: env(safe-area-inset-bottom);
  }
</style>
