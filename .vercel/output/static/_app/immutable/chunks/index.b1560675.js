import{y as f,S as w,O as m,s as q,K as x}from"./scheduler.70959352.js";const a=[];function z(e,i){return{subscribe:A(e,i).subscribe}}function A(e,i=f){let r;const n=new Set;function u(t){if(q(e,t)&&(e=t,r)){const o=!a.length;for(const s of n)s[1](),a.push(s,e);if(o){for(let s=0;s<a.length;s+=2)a[s][0](a[s+1]);a.length=0}}}function l(t){u(t(e))}function b(t,o=f){const s=[t,o];return n.add(s),n.size===1&&(r=i(u,l)||f),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:u,update:l,subscribe:b}}function B(e,i,r){const n=!Array.isArray(e),u=n?[e]:e;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=i.length<2;return z(r,(b,t)=>{let o=!1;const s=[];let d=0,p=f;const y=()=>{if(d)return;p();const c=i(n?s[0]:s,b,t);l?b(c):p=x(c)?c:f},h=u.map((c,g)=>w(c,_=>{s[g]=_,d&=~(1<<g),o&&y()},()=>{d|=1<<g}));return o=!0,y(),function(){m(h),p(),o=!1}})}export{B as d,A as w};
