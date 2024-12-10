<script lang="ts">
  import { Button } from "$lib/components/shadcn/button/index.js";
  import { cn } from "$lib/utils.js";

  type Props = {
    text: string;
    href: string;
    pathname: string;
  };

  const {
    text,
    href,
    pathname,
  }: Props = $props();
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
