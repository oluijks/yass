import type { Handle, ServerInit } from "@sveltejs/kit";
import * as auth from "$lib/server/auth.js";

// @see https://svelte.dev/docs/kit/hooks#Shared-hooks-init
export const init: ServerInit = async () => {
  // eslint-disable-next-line no-console
  console.log("[app] started...");
};

const handleAuth: Handle = async ({ event, resolve }) => {
  const sessionToken = event.cookies.get(auth.sessionCookieName);
  if (!sessionToken) {
    event.locals.user = null;
    event.locals.session = null;
    return resolve(event);
  }

  const { session, user } = await auth.validateSessionToken(sessionToken);
  if (session) {
    auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
  }
  else {
    auth.deleteSessionTokenCookie(event);
  }

  event.locals.user = user;
  event.locals.session = session;

  return resolve(event, {
    preload: ({ type }) => {
      return type === "font" || type === "js" || type === "css";
    },
  });
};

export const handle: Handle = handleAuth;
