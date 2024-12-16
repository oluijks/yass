<script lang="ts">
  import { Button } from "$lib/components/shadcn/button/index.js";
  import { cn } from "$lib/utils.js";

  type Props = {
    text: string;
    href: string;
    pathname: string;
    className?: string | null | undefined;
  };

  const {
    text,
    href,
    pathname,
    className,
  }: Props = $props();
</script>

<!--
@component
A component that will render a link button

- Usage:
  ```tsx
  <NavButton text="Home" href="/" pathname={$page.url.pathname} />
  ```
-->

{#snippet navButton({ text, href, pathname, className }: Props)}
  {@const isActive = pathname === href}
  <Button
    variant="link"
    {href}
    aria-current={isActive ? "page" : undefined}
    class={cn(
      className,
      "transition-colors hover:text-foreground/80",
      pathname === href
        ? "text-foreground underline-offset-4 underline"
        : "text-foreground/70",
    )}>
    {text}
  </Button>
{/snippet}

{@render navButton({ text, href, pathname, className })}
