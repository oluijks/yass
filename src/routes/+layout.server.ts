export function load(event) {
  return {
    defaultMeta: {
      title: 'Home',
      description: 'default meta descriptions',
    },
    user: event.locals.user,
    session: event.locals.session,
  };
}
