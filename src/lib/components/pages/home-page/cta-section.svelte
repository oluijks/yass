<script lang="ts">
  import { Button } from "$lib/components/shadcn/button/index.js";
  import { siteConfig } from "$lib/config/site.js";
  import { GithubLogo } from "phosphor-svelte";
</script>

<section class="full-bleed bg-card">
  <div
    class="max-w-6xl mx-auto px-0 md:px-3 py-6 lg:py-16 container"
  >
    <div class="text-center max-w-3xl mx-auto">
      <h2 class="text-3xl lg:text-4xl mb-6">
        Ready to Get Started?
      </h2>
      <p class="text-xl leading-7 text-muted-foreground mb-8">
        Join all developers who are already building amazing things with our starter
      </p>
      <div class="flex gap-4 justify-center">
        <Button
          size="lg"
          class="flex items-center justify-center lg:w-52 text-base w-full"
          href={siteConfig.repo}
          target="_blank"
        >
          <GithubLogo weight="duotone" />
          Clone source
        </Button>
      </div>
    </div>
  </div>
</section>
