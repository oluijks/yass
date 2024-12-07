export function load(event) {
  return {
    user: event.locals.user,
    session: event.locals.session,
  };
}
