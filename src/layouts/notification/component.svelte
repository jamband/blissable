<script lang="ts">
  import { notification } from "@/stores/notification";

  const show = (node: HTMLElement) => {
    if ($notification.show) {
      import("bootstrap/js/dist/toast").then((module) => {
        new module.default(node).show();
      });
    }
  };

  const clear = (node: HTMLElement) => {
    node.addEventListener("hidden.bs.toast", () => {
      notification.clear();
    });
  };
</script>

{#if $notification.show}
  <div
    class="toast"
    data-bs-delay={$notification.delay}
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    use:show
    use:clear
  >
    <div class="d-flex">
      <div class="ms-2 toast-body font-monospace">
        {$notification.message}
      </div>
      <button
        class="me-3 m-auto btn-close"
        on:click={notification.clear}
        data-bs-dismiss="toast"
      />
    </div>
  </div>
{/if}

<style lang="scss">
  @import "../../styles/variables";
  @import "../../../node_modules/bootstrap/scss/mixins/breakpoints";

  .toast {
    position: fixed;
    top: 1rem;
    z-index: $zindex-toast;

    @include media-breakpoint-down(sm) {
      left: 0;
      margin: auto;
      right: 0;
    }

    @include media-breakpoint-up(sm) {
      right: 1rem;
    }
  }
</style>
