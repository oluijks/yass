<script lang="ts">
  import type { Snippet } from "svelte";

  const { children }: {
    children: Snippet;
  } = $props();
</script>

<!--
@component
A component that will wrap a given page or child component

- Usage:
  ```tsx
  <PageContainer>
    <p>your content</p>
  </PageContainer>
  ```
-->

<div class="flex flex-col mx-auto px-6">
  {@render children()}
</div>
