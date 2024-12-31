<script lang="ts">
  import { siteConfig } from "$lib/config/site.js";
</script>

<div class="lg:max-w-6xl lg:container">
  <h1
    class="scroll-m-20 text-3xl lg:text-4xl my-12"
    data-testid="about-page-heading"
  >
    About {siteConfig.name}
  </h1>

  <p class="text-muted-foreground text-xl">Welcome to our website!</p>

  <ol class="my-6 [&>li]:mt-2">
    <li class="mb-3">
      <p>
        We created this space to showcase the features and capabilities of our
        upcoming product/service. Our goal is to provide you with a hands-on
        experience that gives you a preview of what's to come.
      </p>
    </li>
    <li class="mb-3">
      <p>
        We are passionate about innovation and user experience, and we're
        working hard to build something that adds value and makes your life
        easier. While this demo is just a small sample, we hope it sparks your
        interest and gives you an idea of how our full product will benefit you.
      </p>
    </li>
    <li class="mb-3">
      <p>
        Stay tuned for updates, and feel free to reach out if you have any
        questions or feedback!
      </p>
    </li>
    <li class="mb-3">
      <p>Thank you for visiting.</p>
    </li>
  </ol>
</div>

<style lang="postcss">
  p {
    @apply text-balance leading-7 [&:not(:first-child)]:mt-1;
  }
</style>
