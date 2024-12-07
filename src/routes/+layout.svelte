<script lang="ts">
  import { page } from "$app/stores";
  import AppFooter from "$lib/components/layout/app-footer.svelte";
  import AppHeader from "$lib/components/layout/app-header.svelte";
  import { Toaster } from "$lib/components/ui/shadcn/sonner/index.js";
  import { siteConfig } from "$lib/config/site.js";
  import { ModeWatcher } from "mode-watcher";
  import "../assets/styles/app.css";

  const { children } = $props();

  const title = $derived($page.data.meta?.title ?? siteConfig.meta.title);
  const description = $derived(
    $page.data.meta?.description ?? siteConfig.meta.description,
  );
</script>

<svelte:head>
  <title>{title} :: {siteConfig.name}</title>
  <meta name="description" content={description} />
</svelte:head>

<ModeWatcher />
<Toaster richColors />

<div id="app">
  <AppHeader />
  <main>
    {@render children()}
  </main>
  <AppFooter />
</div>
