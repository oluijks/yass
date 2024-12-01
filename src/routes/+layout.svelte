<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { LayoutServerData } from './$types';
  import { page } from '$app/stores';
  import { Toaster } from '$lib/components/ui/sonner/index.js';
  import { ModeWatcher } from 'mode-watcher';
  import '../assets/styles/app.css';

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
  <main>
    {@render children()}
  </main>
</div>
