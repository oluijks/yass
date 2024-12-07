<script lang="ts">
  import type { NavItem } from "$lib/types.js";
  import { version as gitHash } from "$app/environment";
  import { page } from "$app/stores";
  import { Button } from "$lib/components/ui/shadcn/button/index.js";
  import { cn } from "$lib/utils.js";

  const appVersion = __VERSION__;
  const svelteVersion = __SVELTE_VERSION__;
  const svelteKitVersion = __SVELTEKIT_VERSION__;

  export const footerNavItems: NavItem[] = [
    { title: "cookies", href: "/legal/cookies" },
    { title: "policy", href: "/legal/policy" },
    { title: "terms", href: "/legal/terms" },
  ];
</script>

<footer>
  <div class="footer-container">
    <div>
      {#each footerNavItems as footerNavItem}
        {@const isActive = $page.url.pathname === footerNavItem.href}
        <Button
          variant="link"
          href={footerNavItem.href}
          aria-current={isActive ? "page" : undefined}
          class={cn(
            "transition-colors hover:text-foreground/80",
            isActive ? "text-foreground" : "text-foreground/70",
          )}>{footerNavItem.title}</Button
        >
      {/each}
    </div>
    <p
      class="flex flex-col md:flex-row items-center gap-1 text-sm text-muted-foreground/85"
    >
      <span>Lorem Forum v{appVersion} [{gitHash}]</span>
      <span>made with Svelte v{svelteVersion} & SvelteKit v{svelteKitVersion}</span>
    </p>
  </div>
</footer>

<style lang="postcss">
  footer {
    @apply mt-auto border-t border-border/40 bg-background p-2;
  }
  .footer-container {
    @apply flex flex-col items-center gap-2 p-2;
  }
</style>
