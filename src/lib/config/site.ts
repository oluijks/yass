// Change these values to match your project
export const siteConfig = {
  name: "Yass",
  url: "http://localhost:5173",
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
