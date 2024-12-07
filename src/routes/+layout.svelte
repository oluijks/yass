<script lang="ts">
  import { page } from "$app/stores";
  import AppFooter from "$lib/components/layout/app-footer.svelte";
  import AppHeader from "$lib/components/layout/app-header.svelte";
  import { Toaster } from "$lib/components/ui/shadcn/sonner/index.js";
  import { siteConfig } from "$lib/config/site.js";
  import { ModeWatcher } from "mode-watcher";
  import "../assets/styles/app.css";

  const {
    children,
    data,
  }: {
    children: Snippet;
    data: LayoutServerData;
  } = $props();

  const title = $derived($page.data.meta?.title ?? data.defaultMeta.title);
  const description = $derived(
    $page.data.meta?.description ?? data.defaultMeta.description,
  );
</script>

<svelte:head>
  <title>{title} :: Lorem Forum</title>
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
