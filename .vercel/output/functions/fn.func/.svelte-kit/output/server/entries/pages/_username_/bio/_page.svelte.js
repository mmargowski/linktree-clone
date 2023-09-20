import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as add_attribute } from "../../../../chunks/ssr.js";
import "devalue";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<main class="max-w-lg prose text-center mx-auto my-6"><p>Current Bio: <span class="text-info">${escape(data.bio)}</span></p> <p class="text-error">${escape($page.form?.problem ?? "")}</p> <form method="POST"><div class="form-control"><label for="bio" class="label" data-svelte-h="svelte-a9zlk7"><span class="label-text">Your bio</span></label> <textarea name="bio" class="textarea textarea-bordered textarea-accent">${escape(data.bio, false)}</textarea></div> <button class="btn btn-primary my-5" data-svelte-h="svelte-tqnit3">Update Bio</button> <a${add_attribute("href", `/${data.username}/edit`, 0)} class="btn btn-secondary">Back to Profile</a></form></main>`;
});
export {
  Page as default
};
