import { s as subscribe } from "./utils.js";
import { c as create_ssr_component } from "./ssr.js";
import { b as auth } from "./firebase.js";
import { u as userStore } from "./auth.js";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const AuthCheck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  const user = userStore(auth);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${$user ? `${slots.default ? slots.default({}) : ``}` : `<p class="text-error" data-svelte-h="svelte-c8obgo">You must be signed in to view this page.
		<a class="btn btn-primary" href="/login">Sign in</a></p>`}`;
});
export {
  AuthCheck as A
};
