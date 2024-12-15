<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
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

<div class="max-w-5xl mt-6 lg:mt-24 flex flex-col mx-auto px-6 lg:px-0 mb-6">
  {@render children()}
</div>
