import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.99d8f1f0.js","_app/immutable/chunks/scheduler.70959352.js","_app/immutable/chunks/index.06bdbd9c.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.a71ac4a1.js","_app/immutable/chunks/index.b1560675.js","_app/immutable/chunks/stores.1bcbde0c.js"];
export const stylesheets = [];
export const fonts = [];
