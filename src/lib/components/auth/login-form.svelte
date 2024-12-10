<script lang="ts">
  import { dev } from "$app/environment";
  import * as Form from "$lib/components/shadcn/form";
  import { Input } from "$lib/components/shadcn/input";
  import { DEBUG_FORMS } from "$lib/utils.js";
  import { toast } from "svelte-sonner";
  import {
    type Infer,
    superForm,
    type SuperValidated,
  } from "sveltekit-superforms";
  import SuperDebug from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { type LoginFormSchema, loginFormSchema } from "./schema.js";

  const {
    data,
  }: {
    data: SuperValidated<Infer<LoginFormSchema>>;
  } = $props();

  const form = superForm(data, {
    resetForm: false,
    validators: zodClient(loginFormSchema),
    taintedMessage: true,
    onUpdated({ form }) {
      if (form.message) {
        if (form.message.status === "error") {
          toast.error("Error", { description: form.message.text });
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
  <div class="grid gap-2">
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
            <Input type="password" {...props} bind:value={$formData.password} />
          {/snippet}
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </div>
    <Form.Button variant="secondary" disabled={$delayed} class="w-full mt-3">
      {#if $delayed}
        Submitting
      {:else}
        Login
      {/if}
    </Form.Button>
  </div>
</form>
