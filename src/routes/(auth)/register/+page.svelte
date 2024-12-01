<script lang="ts">
  import type { PageData } from './$types';
  import RegisterForm from '$lib/components/auth/register-form.svelte';
  import * as Card from '$lib/components/ui/card/index.js';

  const {
    data,
  }: {
    data: PageData;
  } = $props();
</script>

<Card.Root class="mx-auto w-full md:max-w-md">
  <Card.Header>
    <Card.Title class="text-2xl">Register</Card.Title>
    <Card.Description class="text-base"
    >Enter your info to create an account</Card.Description
    >
  </Card.Header>
  <Card.Content>
    <RegisterForm data={data.form} />
  </Card.Content>
  <Card.Footer class="justify-center gap-1">
    <span>Already have an account?</span>
    <a href="/login" class="underline underline-offset-4">Login</a>
  </Card.Footer>
</Card.Root>
