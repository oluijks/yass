<script lang="ts">
  import type { Snippet } from "svelte";

  const { children }: { children: Snippet } = $props();
</script>

<div class="max-w-5xl mt-6 lg:mt-24 flex flex-col mx-auto px-6 lg:px-0 mb-6">
  {@render children()}
</div>
