import type { SvelteComponent } from "svelte";

import Bug from "./bug.svelte";
import Manual from "./manual.svelte";
import Message from "./message.svelte";
import Newspaper from "./newspaper.svelte";

export type Icon = SvelteComponent;

export const Icons = {
  bug: Bug,
  manual: Manual,
  message: Message,
  newspaper: Newspaper,
};
