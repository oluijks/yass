import antfu from "@antfu/eslint-config";

export default antfu(
  {
    formatters: true,
    svelte: true,
    stylistic: {
      semi: true,
      indent: 2,
      quotes: "double",
    },
    ignores: ["src/lib/server/db/migrations/", "src/lib/components/shadcn/"],
  },
  {
    files: ["**/*.svelte"],
    rules: {
      "svelte/html-quotes": ["error", { prefer: "double" }],
    },
  },
  {
    files: ["**/*.css"],
    rules: {
      "format/prettier": ["error", { prefer: "double", printWidth: 120 }],
    },
  },
);
