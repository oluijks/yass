<script lang="ts">
  import { enhance } from "$app/forms";
  import { Button } from "$lib/components/ui/shadcn/button/index.js";

  const { data } = $props();
</script>

<div class="max-w-5xl mt-6 lg:mt-24 flex flex-col mx-auto px-6 lg:px-0 mb-6">
  <h1 class="scroll-m-20 text-3xl lg:text-4xl mb-8">
    Welcome
  </h1>

  {#if data.user}
    <form method="post" action="?/logout" use:enhance>
      <Button type="submit" size="sm" variant="destructive">Sign out</Button>
    </form>
  {/if}
</div>
