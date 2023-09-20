import * as universal from '../entries/pages/_username_/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[username]/+page.ts";
export const imports = ["_app/immutable/nodes/4.5a701be3.js","_app/immutable/chunks/firebase.0ebf22c9.js","_app/immutable/chunks/index.b1560675.js","_app/immutable/chunks/scheduler.70959352.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.06bdbd9c.js","_app/immutable/chunks/UserLink.2e74114d.js"];
export const stylesheets = [];
export const fonts = [];
