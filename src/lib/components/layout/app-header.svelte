<script lang="ts">
  import type { ScrollDirection } from "$lib/types.js";
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { Button, buttonVariants } from "$lib/components/shadcn/button/index.js";
  import * as DropdownMenu from "$lib/components/shadcn/dropdown-menu/index.js";
  import { Separator } from "$lib/components/shadcn/separator/index.js";
  import { siteConfig } from "$lib/config/site";
  import { GithubLogo, SignIn } from "phosphor-svelte";
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
        <NavButton text="About" href="/about" pathname={$page.url.pathname} />
        {#if $page.data.user}
          <NavButton text="Settings" href="/settings" pathname={$page.url.pathname} />
        {/if}
      </nav>
    </div>
    <div class="ml-auto flex items-center gap-2">
      {#if $page.data.user}
        <form method="post" action="?/logout" use:enhance>
          <Button type="submit" variant="link" class="royal-link">Logout</Button>
        </form>
      {:else}
        <div class="flex items-center">
          <!-- Dropdown menu on small screens -->
          <div class="md:hidden">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger class={buttonVariants({ variant: "ghost", size: "icon" })}>
                <SignIn weight="bold" class="!h-[1.2rem] !w-[1.2rem]" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align="end">
                <DropdownMenu.Item onclick={() => goto("/login")}>Login</DropdownMenu.Item>
                <DropdownMenu.Item onclick={() => goto("/register")}>Register</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
          <div class="hidden md:flex items-center">
            <NavButton text="Login" href="/login" pathname={$page.url.pathname} />
            <Separator orientation="vertical" class="h-6 flex" />
            <NavButton text="Register" href="/register" pathname={$page.url.pathname} />
          </div>
        </div>
      {/if}
      <ThemeSwitcher />
      <Button variant="outline" size="icon" href={siteConfig.links.social.github} target="_blank">
        <GithubLogo weight="duotone" class="!h-[1.2rem] !w-[1.2rem]" />
      </Button>
    </div>
  </div>
</header>

<style lang="postcss">
  header {
    view-transition-name: app-header;
  }
  .sticky-header {
    @apply sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 px-2 backdrop-blur supports-[backdrop-filter]:bg-background/60;
  }
</style>
