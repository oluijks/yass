<script lang="ts">
  import HeroImage from "$assets/images/toolbox.png?enhanced";
  import { Button } from "$lib/components/shadcn/button/index.js";
  import { siteConfig } from "$lib/config/site.js";
  import { ArrowRight, GithubLogo } from "phosphor-svelte";
</script>

<!-- <section class="full-bleed lg:bg-card">
  <div class="max-w-6xl container mx-auto px-0 md:px-3 py-6 lg:py-16 lg:flex lg:items-stretch">
    <div class="lg:w-1/2 flex flex-col lg:justify-evenly gap-6 lg:gap-0">
      <div class="space-y-4">
        <h1 class="text-center lg:text-left text-4xl lg:text-5xl">
          {siteConfig.description}
        </h1>
        <p class="text-center lg:text-left leading-7 text-muted-foreground text-xl">
          Kickstart your SvelteKit project effortlessly with {siteConfig.name} — the starter kit for <i>speed</i> and ease.
        </p>
      </div>
      <div class="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-2">
        <Button
          class="flex items-center justify-center w-52"
          href={siteConfig.repo}
          target="_blank"
        >
          <GithubLogo weight="duotone" />
          Clone source
        </Button>
        <Button
          variant="link"
          class="royal-link"
          href="{siteConfig.repo}/blob/main/README.md"
          target="_blank"
        >
          Read more on Github
          <ArrowRight />
        </Button>
      </div>
    </div>
    <div class="m-8 lg:mt-0 lg:w-1/2 justify-center flex">
      <enhanced:img
        src={HeroImage}
        width="1607"
        height="1148"
        loading="eager"
        fetchpriority="high"
        alt="Yet another sveltekit starter"
        title="Toy Tool Box Clip Art @pngkey.com"
        class="object-cover rotate-3 max-w-xs md:max-w-md lg:max-w-lg"
      />
    </div>
  </div>
</section> -->

<section class="full-bleed lg:bg-card">
  <div
    class="max-w-6xl container mx-auto px-0 md:px-3 py-6 lg:py-16 grid lg:grid-cols-2 gap-6 lg:gap-0"
  >
    <div class="flex flex-col justify-evenly gap-6 lg:gap-0">
      <div class="space-y-4">
        <h1 class="text-center lg:text-left text-4xl lg:text-5xl">
          {siteConfig.description}
        </h1>
        <p
          class="text-center lg:text-left leading-7 text-muted-foreground text-xl"
        >
          Kickstart your SvelteKit project effortlessly with {siteConfig.name} —
          the starter kit for <i>speed</i> and ease.
        </p>
      </div>
      <div
        class="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-2"
      >
        <Button
          class="flex items-center justify-center w-52"
          href={siteConfig.repo}
          target="_blank"
        >
          <GithubLogo weight="duotone" />
          Clone source
        </Button>
        <Button
          variant="link"
          class="royal-link"
          href="{siteConfig.repo}/blob/main/README.md"
          target="_blank"
        >
          Read more on Github
          <ArrowRight />
        </Button>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <enhanced:img
        src={HeroImage}
        width="1607"
        height="1148"
        loading="eager"
        fetchpriority="high"
        alt="Yet another sveltekit starter"
        title="Toy Tool Box Clip Art @pngkey.com"
        class="object-cover rotate-3 max-w-xs md:max-w-md lg:max-w-lg"
      />
    </div>
  </div>
</section>
