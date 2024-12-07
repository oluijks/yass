<script lang="ts">
  import type { ScrollDirection } from "$lib/types.js";
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  import { Button } from "$lib/components/ui/shadcn/button/index.js";
  import { Separator } from "$lib/components/ui/shadcn/separator/index.js";
  import { cn } from "$lib/utils.js";
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
  const offScreen = $derived(
    scrollDirection === "down" && currentY > clientHeight * 4,
  );
</script>

<svelte:window bind:scrollY={currentY} />

<header
  class:motion-safe:-translate-y-full={offScreen}
  class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  bind:clientHeight
>
  <div class="flex h-14 items-center">
    <div class="flex">
      <nav class="flex items-center">
        <Button
          variant="link"
          href="/"
          class={cn(
            "transition-colors hover:text-foreground/80",
            $page.url.pathname === "/"
              ? "text-foreground underline-offset-4 underline"
              : "text-foreground/70",
          )}>Home</Button
        >
        <Button
          variant="link"
          href="/about"
          class={cn(
            "transition-colors hover:text-foreground/80",
            $page.url.pathname === "/about"
              ? "text-foreground underline-offset-4 underline"
              : "text-foreground/70",
          )}>About Us</Button
        >
      </nav>
    </div>
    <div class="ml-auto flex items-center gap-2">
      {#if $page.data.user}
        <form method="post" action="?/logout" use:enhance>
          <Button type="submit" variant="secondary">Logout</Button>
        </form>
      {:else}
        <div class="flex items-center">
          <Button
            variant="link"
            href="/login"
            class={cn(
              "transition-colors hover:text-foreground/80",
              $page.url.pathname === "/login"
                ? "text-foreground underline-offset-4 underline"
                : "text-foreground/70",
            )}>Login</Button
          >
          <Separator orientation="vertical" class="h-6" />
          <Button
            variant="link"
            href="/register"
            class={cn(
              "transition-colors hover:text-foreground/80",
              $page.url.pathname === "/register"
                ? "text-foreground underline-offset-4 underline"
                : "text-foreground/70",
            )}>Register</Button
          >
        </div>
      {/if}
      <ThemeSwitcher />
    </div>
  </div>
</header>
