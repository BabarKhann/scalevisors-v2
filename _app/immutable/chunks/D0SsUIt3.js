import{d as V,s as R,b as A,i as C,f as M,g as k,h as T,j as P,H as Y,k as j,m as b,n as g,o as D,p as q,q as v,r as B,t as $,v as z,w as W,x as F,y as G,z as J,A as K,B as Q,c as U,C as E,D as X}from"./DfTZNlkM.js";import{b as Z}from"./DnpN2EpD.js";const x=["touchstart","touchmove"];function rr(r){return x.includes(r)}const er=new Set,O=new Set;function m(r){var N;var e=this,s=e.ownerDocument,c=r.type,o=((N=r.composedPath)==null?void 0:N.call(r))||[],t=o[0]||r.target,d=0,_=r.__root;if(_){var u=o.indexOf(_);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var h=o.indexOf(e);if(h===-1)return;u<=h&&(d=u)}if(t=o[d]||r.target,t!==e){V(r,"currentTarget",{configurable:!0,get(){return t||s}});var w=M,i=k;R(null),A(null);try{for(var a,n=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!==void 0&&(!t.disabled||r.target===t))if(C(l)){var[I,...L]=l;I.apply(t,[r,...L])}else l.call(t,r)}catch(y){a?n.push(y):a=y}if(r.cancelBubble||f===e||f===null)break;t=f}if(a){for(let y of n)queueMicrotask(()=>{throw y});throw a}}finally{r.__root=e,delete r.currentTarget,R(w),A(i)}}}function nr(r,e){var s=e==null?"":typeof e=="object"?e+"":e;s!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=s,r.nodeValue=s+"")}function tr(r,e){return H(r,e)}function ir(r,e){T(),e.intro=e.intro??!1;const s=e.target,c=E,o=v;try{for(var t=P(s);t&&(t.nodeType!==8||t.data!==Y);)t=j(t);if(!t)throw b;g(!0),D(t),q();const d=H(r,{...e,anchor:t});if(v===null||v.nodeType!==8||v.data!==B)throw $(),b;return g(!1),d}catch(d){if(d===b)return e.recover===!1&&z(),T(),W(s),g(!1),tr(r,e);throw d}finally{g(c),D(o)}}const p=new Map;function H(r,{target:e,anchor:s,props:c={},events:o,context:t,intro:d=!0}){T();var _=new Set,u=i=>{for(var a=0;a<i.length;a++){var n=i[a];if(!_.has(n)){_.add(n);var f=rr(n);e.addEventListener(n,m,{passive:f});var l=p.get(n);l===void 0?(document.addEventListener(n,m,{passive:f}),p.set(n,1)):p.set(n,l+1)}}};u(F(er)),O.add(u);var h=void 0,w=G(()=>{var i=s??e.appendChild(J());return K(()=>{if(t){Q({});var a=U;a.c=t}o&&(c.$$events=o),E&&Z(i,null),h=r(i,c)||{},E&&(k.nodes_end=v),t&&X()}),()=>{var f;for(var a of _){e.removeEventListener(a,m);var n=p.get(a);--n===0?(document.removeEventListener(a,m),p.delete(a)):p.set(a,n)}O.delete(u),i!==s&&((f=i.parentNode)==null||f.removeChild(i))}});return S.set(h,w),h}let S=new WeakMap;function or(r,e){const s=S.get(r);return s?(S.delete(r),s(e)):Promise.resolve()}export{ir as h,tr as m,nr as s,or as u};
