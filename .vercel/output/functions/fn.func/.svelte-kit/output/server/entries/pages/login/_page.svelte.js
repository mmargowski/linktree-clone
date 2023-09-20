import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { b as auth } from "../../../chunks/firebase.js";
import "firebase/auth";
import { u as userStore } from "../../../chunks/auth.js";
import "firebase/firestore";
import "firebase/storage";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  const user = userStore(auth);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `<h2 data-svelte-h="svelte-bhb3ah">Login</h2> ${$user ? `<h2 class="card-title">Welcome ${escape($user.displayName)}</h2> <p class="text-center text-success" data-svelte-h="svelte-x3wt7i">You are logged in!</p> <button class="btn btn-warning" data-svelte-h="svelte-wq7ddu">Sign out</button>` : `<button class="btn btn-primary" data-svelte-h="svelte-12721gk">Sign in with Google</button>`}`;
});
export {
  Page as default
};
