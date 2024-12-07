<script lang="ts">
  import LoginForm from "$lib/components/auth/login-form.svelte";
  import * as Card from "$lib/components/ui/shadcn/card/index.js";

  const { data } = $props();
</script>

<div class="px-4">
  <Card.Root
    class="mx-auto w-full md:max-w-md mt-6 lg:mt-24 bg-border/15 border-border/15 rounded-md"
  >
    <Card.Header class="flex items-center gap-2">
      <Card.Title class="text-2xl">Login</Card.Title>
      <Card.Description class="text-base text-center">
        Enter your info to login to your account
      </Card.Description>
    </Card.Header>
    <Card.Content>
      <LoginForm data={data.form} />
    </Card.Content>
    <Card.Footer class="justify-end gap-1">
      <a href="/register" class="hover:underline hover:underline-offset-4">
        Register here
      </a>
    </Card.Footer>
  </Card.Root>
</div>
