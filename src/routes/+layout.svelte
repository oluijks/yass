<script lang="ts">
  import AppFooter from "$lib/components/layout/app-footer.svelte";
  import AppHeader from "$lib/components/layout/app-header.svelte";
  import Metadata from "$lib/components/layout/metadata.svelte";
  import PageContainer from "$lib/components/layout/page-container.svelte";
  import { Toaster } from "$lib/components/shadcn/sonner/index.js";
  import { ModeWatcher } from "mode-watcher";
  import "../assets/styles/app.css";

  const { children } = $props();
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
</style>
