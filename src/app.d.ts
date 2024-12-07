// @see https://svelte.dev/docs/kit/types#app.d.ts

declare global {
  namespace App {
    interface Locals {
      user: import("$lib/server/auth").SessionValidationResult["user"];
      session: import("$lib/server/auth").SessionValidationResult["session"];
    }
  }
}

export {};
