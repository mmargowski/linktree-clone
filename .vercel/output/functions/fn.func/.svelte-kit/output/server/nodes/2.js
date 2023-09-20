

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ff7b86c0.js","_app/immutable/chunks/scheduler.70959352.js","_app/immutable/chunks/index.06bdbd9c.js","_app/immutable/chunks/stores.1bcbde0c.js","_app/immutable/chunks/singletons.a71ac4a1.js","_app/immutable/chunks/index.b1560675.js","_app/immutable/chunks/index.40b40403.js"];
export const stylesheets = [];
export const fonts = [];
