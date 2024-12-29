// Change these values to match your project
export const siteConfig = {
  name: "Yass",
  description: "Yet another sveltekit starter",
  url: "https://yass.luba.dev",
  repo: "https://github.com/oluijks/yass",
  meta: {
    title: "Yass",
    description: "Yet another sveltekit starter",
    keywords: "svelte,sveltekit,drizzle,tailwindcss,sqlite",
  },
  links: {
    social: {
      github: "https://github.com/oluijks",
      twitter: "https://x.com",
      facebook: "https://www.facebook.com/profile.php?id=100082175559972",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
