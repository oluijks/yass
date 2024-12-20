import type { Component } from "svelte";

import Bug from "./bug.svelte";
import Manual from "./manual.svelte";
import Message from "./message.svelte";
import Newspaper from "./newspaper.svelte";

export type Icon = Component;

export const Icons = {
  bug: Bug,
  manual: Manual,
  message: Message,
  newspaper: Newspaper,
};
