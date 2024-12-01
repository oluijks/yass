<script lang="ts">
  import type { PageData } from './$types';
  import LoginForm from '$lib/components/auth/login-form.svelte';
  import * as Card from '$lib/components/ui/card/index.js';

  const {
    data,
  }: {
    data: PageData;
  } = $props();
</script>

<Card.Root class="mx-auto w-full md:max-w-md">
  <Card.Header>
    <Card.Title class="text-2xl">Login</Card.Title>
    <Card.Description class="text-base"
    >Enter your info below to login to your account</Card.Description
    >
  </Card.Header>
  <Card.Content>
    <LoginForm data={data.form} />
  </Card.Content>
  <Card.Footer class="justify-center gap-1">
    <span>Don't have an account?</span>
    <a href="/register" class="underline underline-offset-4">Register</a>
  </Card.Footer>
</Card.Root>
