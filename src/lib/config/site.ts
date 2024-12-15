export const siteConfig = {
  name: "Yass",
  url: "https://lorem-forum.com",
  meta: {
    title: "site title",
    description: "site description",
    keywords: "svelte,sveltekit,drizzle,tailwindcss,sqlite",
  },
  links: {
    social: {
      github: "https://github.com/oluijks/yass",
      twitter: "https://twitter.com",
      facebook: "https://www.facebook.com",
    },
  },
};

export type SiteConfig = typeof siteConfig;
