<script lang="ts">
  import { page } from "$app/state";
  import { siteConfig } from "$lib/config/site.js";

  const title = $derived(page.data.meta?.title ?? siteConfig.meta.title);
  const keywords = $derived(page.data.meta?.keywords ?? siteConfig.meta.keywords);
  const description = $derived(page.data.meta?.description ?? siteConfig.meta.description);
</script>

<!--
@component
A component that will add metadata tags to the document.head

- Usage:
  ```tsx
  <Metatdata />
  ```
-->

<svelte:head>
  <title>{title} :: {siteConfig.name}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content="oluijks">
</svelte:head>
