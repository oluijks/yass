import { error } from "@sveltejs/kit";

export async function load() {
  error(404);
}
