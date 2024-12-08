<script lang="ts">
  import { Button } from "$lib/components/ui/shadcn/button/index.js";
  import { cn } from "$lib/utils.js";

  const {
    text,
    href,
    pathname,
  }: {
    text: string;
    href: string;
    pathname: string;
  } = $props();
</script>

{#snippet navButton({ text, href, pathname }: { text: string; href: string; pathname: string })}
  {@const isActive = pathname === href}
  <Button
    variant="link"
    {href}
    aria-current={isActive ? "page" : undefined}
    class={cn(
      "transition-colors hover:text-foreground/80",
      pathname === href
        ? "text-foreground underline-offset-4 underline"
        : "text-foreground/70",
    )}>
    {text}
  </Button>
{/snippet}

{@render navButton({ text, href, pathname })}
