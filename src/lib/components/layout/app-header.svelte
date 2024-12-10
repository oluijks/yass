<script lang="ts">
  import type { ScrollDirection } from "$lib/types.js";
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  import { Button } from "$lib/components/shadcn/button/index.js";
  import { Separator } from "$lib/components/shadcn/separator/index.js";
  import NavButton from "./nav-button.svelte";
  import ThemeSwitcher from "./theme-switcher.svelte";

  // Logic scroll behavior, thanks to Johnny Magrippis (https://www.youtube.com/@jmagrippis)
  let previousY = 0;
  let currentY = $state<number>(0);
  let clientHeight = $state<number>(0);
  const derivedDirection = (y: number): ScrollDirection => {
    const direction = !previousY || previousY < y ? "down" : "up";
    previousY = y;

    return direction;
  };
  const scrollDirection = $derived(derivedDirection(currentY));
  const offScreen = $derived(scrollDirection === "down" && currentY > clientHeight * 4);
</script>

<svelte:window bind:scrollY={currentY} />

<header class:motion-safe:-translate-y-full={offScreen} class="sticky-header" bind:clientHeight>
  <div class="flex h-14 items-center">
    <div class="flex">
      <nav class="flex items-center">
        <NavButton text="Home" href="/" pathname={$page.url.pathname} />
        <NavButton text="About Us" href="/about" pathname={$page.url.pathname} />
      </nav>
    </div>
    <div class="ml-auto flex items-center gap-2">
      {#if $page.data.user}
        <form method="post" action="?/logout" use:enhance>
          <Button type="submit" variant="link" class="royal-link">Logout</Button>
        </form>
      {:else}
        <div class="flex items-center">
          <NavButton text="Login" href="/login" pathname={$page.url.pathname} />
          <Separator orientation="vertical" class="h-6" />
          <NavButton text="Register" href="/register" pathname={$page.url.pathname} />
        </div>
      {/if}
      <ThemeSwitcher />
    </div>
  </div>
</header>

<style lang="postcss">
  .sticky-header {
    @apply sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60;
  }
</style>
