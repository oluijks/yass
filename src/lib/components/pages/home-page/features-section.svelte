<script lang="ts">
  import type { IconComponentProps } from "phosphor-svelte";
  import type { Component } from "svelte";
  import * as Card from "$lib/components/shadcn/card/index.js";
  import {
    AirplaneTakeoff,
    Fingerprint,
    Gear,

    ShieldCheck,
  } from "phosphor-svelte";

  type Feature = {
    id: number;
    icon: Component<IconComponentProps, {}, "">;
    description: string;
    content: string;
  };

  const features: Feature[] = [
    {
      id: 1,
      icon: AirplaneTakeoff,
      description: "Get Started Quickly",
      content:
        "Kickstart your SvelteKit project in minutes with Yass — the ultimate starter kit for speed and simplicity.",
    },
    {
      id: 2,
      icon: Gear,
      description: "Fully Configured",
      content:
        "ESLint (@antfu), Tailwind, Drizzle, App Store, Enhanced Images and build optimizations, all properly configured.",
    },
    {
      id: 3,
      icon: ShieldCheck,
      description: "Best Practices",
      content:
        "Built with the best coding and styling practices in mind, Yass sets the standard for your SvelteKit projects.",
    },
    {
      id: 4,
      icon: Fingerprint,
      description: "User Authentication",
      content:
        "Seamlessly integrated username and password authentication powered by the robust foundations of Lucia.",
    },
  ];
</script>

<section class="full-bleed">
  <div
    class="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-4 px-0 md:px-3 py-6 lg:py-16"
  >
    {#each features as feature}
      <Card.Root class="rounded-md hover:border-blue-500">
        <Card.Header class="flex items-center">
          <Card.Title level={2}>
            <feature.icon weight="thin" size="92" class="text-blue-500" />
          </Card.Title>
          <Card.Description class="text-2xl text-center pt-3">
            {feature.description}
          </Card.Description>
        </Card.Header>
        <Card.Content class="text-center text-pretty">
          <p>{feature.content}</p>
        </Card.Content>
      </Card.Root>
    {/each}
  </div>
</section>
