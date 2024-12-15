<script lang="ts">
  import type { NavItem } from "$lib/types.js";
  import { version as gitHash } from "$app/environment";
  import { page } from "$app/stores";
  import { siteConfig } from "$lib/config/site.js";
  import NavButton from "./nav-button.svelte";

  const appVersion = __VERSION__;
  const svelteVersion = __SVELTE_VERSION__;
  const svelteKitVersion = __SVELTEKIT_VERSION__;

  export const navItems: NavItem[] = [
    { title: "cookies", href: "/legal/cookies" },
    { title: "policy", href: "/legal/policy" },
    { title: "terms", href: "/legal/terms" },
  ];
</script>

<footer>
  <div class="footer-container">
    <div>
      {#each navItems as navItem}
        <NavButton text={navItem.title} href={navItem.href} pathname={$page.url.pathname} />
      {/each}
    </div>
    <p class="flex flex-col md:flex-row items-center gap-1 text-sm text-muted-foreground/85">
      <span>{siteConfig.name} v{appVersion} [{gitHash}]</span>
      <span>made with Svelte v{svelteVersion} & SvelteKit v{svelteKitVersion}</span>
    </p>
  </div>
</footer>

<style lang="postcss">
  footer {
    @apply mt-auto border-t border-border/40 bg-background p-2;
    view-transition-name: app-footer;
  }
  .footer-container {
    @apply flex flex-col items-center gap-2 p-2;
  }
</style>
