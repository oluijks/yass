import * as auth from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async (event) => {
  return { user: event.locals.user };
};

export const actions = {
  logout: async (event) => {
    if (!event.locals.session)
      return fail(401);

    await auth.invalidateSession(event.locals.session.id);
    auth.deleteSessionTokenCookie(event);

    return redirect(302, "/");
  },
};
