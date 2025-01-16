import { APP_STATE_KEY } from "$lib/types";
import { getContext, setContext } from "svelte";

export class AppState {
  #animationsEnabled = $state(false);
  // Add more properties here

  constructor() {
    // Multiple `$effect()` to get and save
    // items to local storage, thanks to Joy of Code
    // @see https://www.youtube.com/watch?v=uOI77E8Y95Q
    $effect(() => {
      const savedAnimationsEnabled
        = window.localStorage.getItem("animations-enabled");
      savedAnimationsEnabled
      && (this.#animationsEnabled = JSON.parse(savedAnimationsEnabled));
    });

    $effect(() => {
      window.localStorage.setItem(
        "animations-enabled",
        JSON.stringify(this.#animationsEnabled),
      );
    });
  }

  get animationsEnabled() {
    return this.#animationsEnabled;
  }

  set animationsEnabled(value: boolean) {
    this.#animationsEnabled = value;
  }

  toggleAnimationsEnabled = () => {
    this.#animationsEnabled = !this.#animationsEnabled;
  };
}

// Wrapper functions for set and get context
// Thanks to Huntabyte
// @see https://www.youtube.com/watch?v=e1vlC31Sh34
export function setAppState() {
  return setContext(APP_STATE_KEY, new AppState());
}

export function getAppState() {
  return getContext<ReturnType<typeof setAppState>>(APP_STATE_KEY);
}
