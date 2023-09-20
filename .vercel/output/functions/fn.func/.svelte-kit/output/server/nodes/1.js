

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9854ebff.js","_app/immutable/chunks/scheduler.70959352.js","_app/immutable/chunks/index.06bdbd9c.js","_app/immutable/chunks/stores.1bcbde0c.js","_app/immutable/chunks/singletons.a71ac4a1.js","_app/immutable/chunks/index.b1560675.js"];
export const stylesheets = [];
export const fonts = [];
