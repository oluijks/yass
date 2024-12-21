<script lang="ts">
  import * as Card from "$lib/components/shadcn/card/index.js";
  import { Label } from "$lib/components/shadcn/label/index.js";
  import { Switch } from "$lib/components/shadcn/switch/index.js";
  import { getAppState } from "$lib/state/app.svelte.js";

  const appState = getAppState();

  let animated = $state(false);
  $effect.pre(() => {
    animated = appState.animationsEnabled;
  });
</script>

<div class="lg:max-w-6xl lg:container">
  <h1 class="scroll-m-20 text-3xl lg:text-4xl my-12">Site Settings</h1>

  <p class="text-muted-foreground text-xl mb-8">
    Manage your site settings
  </p>

  <h2 class="text-xl ml-1 mb-2 font-medium">General</h2>

  <Card.Root>
    <Card.Content>
      <div class="flex items-center justify-between">
        <Label for="animations-enabled">
          Animations are {animated ? "Enabled" : "Disabled"}
        </Label>
        <Switch
          id="animations-enabled"
          bind:checked={animated}
          onCheckedChange={() => appState.toggleAnimationsEnabled()}
        />
      </div>
    </Card.Content>
  </Card.Root>
</div>
