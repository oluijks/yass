export const siteConfig = {
  name: "Lorem Forum",
  url: "https://lorem-forum.com",
  meta: {
    title: "site title",
    description: "site description",
    keywords: "svelte,sveltekit,drizzle,tailwindcss,sqlite",
  },
  links: {
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      facebook: "https://www.facebook.com",
    },
  },
};

export type SiteConfig = typeof siteConfig;
