

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.66fa3c36.js","_app/immutable/chunks/scheduler.70959352.js","_app/immutable/chunks/index.06bdbd9c.js"];
export const stylesheets = ["_app/immutable/assets/0.92f45698.css"];
export const fonts = [];
