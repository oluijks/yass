<script lang="ts">
  import type { PageServerData } from './$types';
  import { enhance } from '$app/forms';
  import { Button } from '$lib/components/ui/button/index.js';

  const { data }: { data: PageServerData } = $props();
</script>

<h1>Welcome to Lorem Forum</h1>

{#if data.user}
  <form method="post" action="?/logout" use:enhance>
    <Button type="submit" size="sm" variant="destructive">Sign out</Button>
  </form>
{/if}
