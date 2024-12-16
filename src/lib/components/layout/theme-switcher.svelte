<script lang="ts">
  import { buttonVariants } from "$lib/components/shadcn/button/index.js";
  import * as DropdownMenu from "$lib/components/shadcn/dropdown-menu/index.js";
  import { mode, resetMode, setMode } from "mode-watcher";
  import { Moon, Sun } from "phosphor-svelte";

  const handleModeChange = () => {
    if ($mode === "light") {
      setMode("dark");
      document.documentElement.classList.add("cc--darkmode");
    }
    else {
      setMode("light");
      document.documentElement.classList.remove("cc--darkmode");
    }
  };

  $effect(() => {
    if ($mode !== "light")
      document.documentElement.classList.add("cc--darkmode");
  });
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger class={buttonVariants({ variant: "ghost", size: "icon" })}>
    <Sun
      weight="duotone"
      class="!h-[1.2rem] !w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Moon
      weight="duotone"
      class="absolute !h-[1.2rem] !w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <span class="sr-only">Toggle theme</span>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
    <DropdownMenu.Item onclick={handleModeChange}>Light</DropdownMenu.Item>
    <DropdownMenu.Item onclick={handleModeChange}>Dark</DropdownMenu.Item>
    <DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
