<script lang="ts">
  import { dev } from '$app/environment';
  import * as Form from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  import { DEBUG_FORMS } from '$lib/utils.js';
  import { toast } from 'svelte-sonner';
  import {
    type Infer,
    superForm,
    type SuperValidated,
  } from 'sveltekit-superforms';
  import SuperDebug from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import {
    type RegisterFormSchema,
    registerFormSchema,
  } from './form-schemas.js';

  const {
    data,
  }: {
    data: SuperValidated<Infer<RegisterFormSchema>>;
  } = $props();

  const form = superForm(data, {
    resetForm: false,
    validators: zodClient(registerFormSchema),
    taintedMessage: true,
    onUpdated({ form }) {
      if (form.message) {
        if (form.message.status === 'error') {
          toast.error(form.message.text);
        }
      }
    },
  });

  const { form: formData, enhance, constraints, delayed } = form;
</script>

{#if dev && DEBUG_FORMS}
  <SuperDebug data={form.form} />
{/if}

<form method="POST" use:enhance>
  <div class="grid gap-4">
    <div class="grid gap-2">
      <Form.Field {form} name="username">
        <Form.Control>
          {#snippet children({ props })}
            <Form.Label>Username</Form.Label>
            <Input
              {...props}
              bind:value={$formData.username}
              {...$constraints.username}
            />
          {/snippet}
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </div>
    <div class="grid gap-2">
      <Form.Field {form} name="password">
        <Form.Control>
          {#snippet children({ props })}
            <Form.Label>Password</Form.Label>
            <Input
              type="password"
              {...props}
              bind:value={$formData.password}
              {...$constraints.password}
            />
          {/snippet}
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </div>
    <div class="grid gap-2">
      <Form.Field {form} name="passwordConfirm">
        <Form.Control>
          {#snippet children({ props })}
            <Form.Label>Confirm Password</Form.Label>
            <Input
              type="password"
              {...props}
              bind:value={$formData.passwordConfirm}
              {...$constraints.passwordConfirm}
            />
          {/snippet}
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </div>
    <Form.Button disabled={$delayed} class="w-full">
      {#if $delayed}
        Submitting
      {:else}
        Create an account
      {/if}
    </Form.Button>
  </div>
</form>
