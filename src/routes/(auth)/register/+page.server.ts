import type { Actions, PageServerLoad } from './$types';
import { registerFormSchema } from '$lib/components/auth/form-schemas.js';
import * as auth from '$lib/server/auth';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import { PASSWORD_HASH_OPTIONS } from '$lib/utils';
import { hash } from '@node-rs/argon2';
import { encodeBase32LowerCase } from '@oslojs/encoding';
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = (async (event) => {
  if (event.locals.user) {
    return redirect(302, '/');
  }
  return {
    meta: {
      title: 'Register',
    },
    form: await superValidate(zod(registerFormSchema), { strict: false }),
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(registerFormSchema));
    if (!form.valid) {
      return message(form, { status: 'error', text: 'Invalid form' });
    }

    const userId = generateUserId();
    const passwordHash = await hash(form.data.password, PASSWORD_HASH_OPTIONS);

    const results = await db
      .select()
      .from(table.user)
      .where(eq(table.user.username, form.data.username));

    const existingUser = results.at(0);
    if (existingUser) {
      return message(form, { status: 'error', text: 'Username already taken' });
    }

    try {
      await db.insert(table.user).values({
        id: userId,
        username: form.data.username,
        passwordHash,
      });

      const sessionToken = auth.generateSessionToken();
      const session = await auth.createSession(sessionToken, userId);
      auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
    }
    catch (error) {
      console.error(error);
      return message(form, {
        status: 'error',
        text: 'Error, please try again',
      });
    }

    redirect(302, '/');
  },
};

function generateUserId() {
  // ID with 120 bits of entropy, or about the same as UUID v4.
  const bytes = crypto.getRandomValues(new Uint8Array(15));
  const id = encodeBase32LowerCase(bytes);
  return id;
}
