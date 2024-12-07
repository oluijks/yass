<script lang="ts">
  import { buttonVariants } from "$lib/components/ui/shadcn/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/shadcn/dropdown-menu/index.js";
  import Moon from "lucide-svelte/icons/moon";
  import Sun from "lucide-svelte/icons/sun";
  import { mode, resetMode, setMode } from "mode-watcher";
  import { onMount } from "svelte";

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

  onMount(() => {
    if ($mode !== "light")
      document.documentElement.classList.add("cc--darkmode");
  });
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger
    class={buttonVariants({ variant: "ghost", size: "icon" })}
  >
    <Sun
      class="!h-[1.4rem] !w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />

    <Moon
      class="absolute !h-[1.4rem] !w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
    <DropdownMenu.Item onclick={handleModeChange}>Light</DropdownMenu.Item>
    <DropdownMenu.Item onclick={handleModeChange}>Dark</DropdownMenu.Item>
    <DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
