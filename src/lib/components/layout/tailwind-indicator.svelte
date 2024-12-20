<script lang="ts">
  import { dev } from "$app/environment";
  import { Badge } from "$lib/components/shadcn/badge/index.js";

  const indicators = [
    { indicator: "xs", class: "block sm:hidden" },
    { indicator: "sm", class: "hidden sm:block md:hidden" },
    { indicator: "md", class: "hidden md:block lg:hidden" },
    { indicator: "lg", class: "hidden lg:block xl:hidden" },
    { indicator: "xl", class: "hidden xl:block 2xl:hidden" },
    { indicator: "2xl", class: "hidden 2xl:block" },
  ] as const;
</script>

{#if dev}
  <div class="fixed bottom-0 right-0 z-50 m-3 flex items-center justify-center font-mono">
    {#each indicators as item}
      <Badge variant="secondary" class={item.class}>{item.indicator}</Badge>
    {/each}
  </div>
{/if}
