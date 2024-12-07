import type { SvelteComponent } from "svelte";

import Bug from "./bug.svelte";
import Manual from "./manual.svelte";
import Messages from "./messages.svelte";
import Newspaper from "./newspaper.svelte";

export type Icon = SvelteComponent;

export const Icons = {
  bug: Bug,
  manual: Manual,
  messages: Messages,
  newspaper: Newspaper,
};
