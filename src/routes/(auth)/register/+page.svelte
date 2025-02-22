<script lang="ts">
  import RegisterForm from "$lib/components/auth/register-form.svelte";
  import * as Card from "$lib/components/shadcn/card/index.js";
  // import { getAppState } from "$lib/state/app.svelte.js";

  const { data } = $props();
  // const appState = getAppState();
  // const animated = $derived(appState.animationsEnabled);
</script>

<div
  class="w-full md:max-w-md mx-auto mt-6 lg:mt-24"
>
  <Card.Root class="border-0">
    <Card.Header class="flex items-center gap-2">
      <Card.Title level={1} class="text-2xl">Register</Card.Title>
      <Card.Description class="text-base text-center">
        Enter your info to create an account
      </Card.Description>
    </Card.Header>
    <Card.Content>
      <RegisterForm data={data.form} />
    </Card.Content>
    <Card.Footer class="justify-end gap-1">
      <a
        href="/login"
        class="royal-link hover:underline hover:underline-offset-4"
      >
        Login here
      </a>
    </Card.Footer>
  </Card.Root>
</div>
