export type ScrollDirection = "up" | "down";

export interface NavItem {
  href: string;
  title: string;
}

export const APP_STATE_KEY = Symbol("APP_STATE");
