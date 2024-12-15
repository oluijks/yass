<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import AppFooter from "$lib/components/layout/app-footer.svelte";
  import AppHeader from "$lib/components/layout/app-header.svelte";
  import Metadata from "$lib/components/layout/metadata.svelte";
  import PageContainer from "$lib/components/layout/page-container.svelte";
  import { Toaster } from "$lib/components/shadcn/sonner/index.js";
  import { ModeWatcher } from "mode-watcher";
  import "../assets/styles/app.css";

  const { children, data } = $props();
  setAppState();

  // Subtle page transitions (see style block below)
  // Thanks to Johnny Magrippis (https://www.youtube.com/@jmagrippis)

  // If you target browsers that don't have startViewTransition
  // yet you might want to use the built-in transitions from svelte
  // See usage: https://caniuse.com/?search=startViewTransition
  // Example: https://rgbstudios.org/blog/page-transitions-in-svelte-kit
  onNavigate((navigation) => {
    if (document.startViewTransition && navigation.from?.route.id !== navigation.to?.route.id) {
      return new Promise((resolve) => {
        document.startViewTransition(async () => {
          resolve();
          await navigation.complete;
        });
      });
    }
  });
</script>

<Metadata />
<ModeWatcher />
<Toaster richColors position="top-right" />

<div id="app">
  <AppHeader />
  <main>
    <PageContainer>
      {@render children()}
    </PageContainer>
  </main>
  <AppFooter />
</div>

<style>
  :global(:where([data-sonner-toast][data-styled="true"])) {
    font-size: 16px !important;
    gap: 12px !important;
    border-radius: calc(var(--radius) - 2px) !important;
  }

  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes fade-out {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  /* Adjust duration and type of animation to your liking */
  :root::view-transition-old(root) {
    animation: 200ms linear forwards fade-out;
  }
  :root::view-transition-new(root) {
    animation: 250ms linear forwards fade-in;
  }
</style>
