(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[3],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return l}));const a={desktop:2080,laptop:1680,tablet:1024,mobile:696,mobileS:400},r=e=>`${e}px`,c=e=>e/16+"rem",o=e=>Number(e.replace("ms","")),i=e=>`${e}ms`,l=e=>e.split(" ").map((e=>Number(e)/255))},,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return m})),n.d(t,"k",(function(){return j})),n.d(t,"l",(function(){return p}));var a=n(0),r=n(17);var c=function(){return Object(a.useContext)(r.a)};var o=function(e=""){const[t,n]=Object(a.useState)(e),[r,c]=Object(a.useState)(),[o,i]=Object(a.useState)(!1);return{value:t,error:r,onChange:e=>{n(e.target.value),i(!0),r&&e.target.checkValidity()&&c(null)},onBlur:e=>{o&&e.target.checkValidity()},onInvalid:e=>{e.preventDefault(),c(e.target.validationMessage)}}};let i=0;var l=()=>{const[e,t]=Object(a.useState)(null);return Object(a.useEffect)((()=>t(++i)),[]),e};var s=function(e,t,n){const r=Object(a.useRef)();Object(a.useEffect)((()=>{r.current=e})),Object(a.useEffect)((()=>{if(null!==t){let e=setInterval((function(){r.current()}),t);return()=>clearInterval(e)}}),[t,n])};var u=function(e,t,n={},r=!0){const[c,o]=Object(a.useState)(!1),[i,l]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{if(!(null===e||void 0===e?void 0:e.current))return;const a=new IntersectionObserver((([e])=>{const{isIntersecting:n,target:r}=e;o(n),n&&t&&(a.unobserve(r),l(!0))}),n);return!i&&r&&a.observe(e.current),()=>a.disconnect()}),[e,t,n,i,r]),c};var d=function(e,t){const[n,r]=Object(a.useState)((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(n),t}}));return[n,t=>{try{const a=t instanceof Function?t(n):t;r(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(a){console.error(a)}}]};var h=function(e,t=!0){const[n,r]=Object(a.useState)(0),c=b();return Object(a.useEffect)((()=>{let n=!1,a=null;const o=()=>{const{innerHeight:a}=window,c=Math.max(0,window.scrollY)*e,o=Math.max(-a,Math.min(a,c));r(t?o:c),n=!1},i=()=>{n||(n=!0,a=requestAnimationFrame(o))};return c||window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i),cancelAnimationFrame(a)}}),[t,e,c]),n};var b=function(){const[e,t]=Object(a.useState)((()=>{var e,t;return null===(e=(t=window).matchMedia)||void 0===e?void 0:e.call(t,"(prefers-reduced-motion: reduce)").matches}));return Object(a.useEffect)((()=>{var e,n;const a=null===(e=(n=window).matchMedia)||void 0===e?void 0:e.call(n,"(prefers-reduced-motion: reduce)"),r=()=>{t(null===a||void 0===a?void 0:a.matches)};return null===a||void 0===a||a.addListener(r),r(),()=>{null===a||void 0===a||a.removeListener(r)}}),[]),e};var f=function(e){const t=Object(a.useRef)();return Object(a.useEffect)((()=>{t.current=e}),[e]),t.current};var m=function(){return Object(a.useContext)(r.b)};var j=function(){const{status:e}=m(),t=f(e),n=b();Object(a.useEffect)((()=>{("entering"===t&&"entered"===e||n&&"entered"===e)&&(window.scrollTo(0,0),document.getElementById("MainContent").focus())}),[n,t,e])};var p=function(){const e="object"===typeof window,t=navigator.userAgent.match(/iphone|ipod|ipad/i),n=Object(a.useRef)((()=>({w:0,h:0}))),r=Object(a.useRef)((()=>Math.abs(window.orientation))),c=Object(a.useCallback)((()=>{let e=document.createElement("div");e.style.position="fixed",e.style.height="100vh",e.style.width=0,e.style.top=0,document.documentElement.appendChild(e),r.current.w=90===n.current?e.offsetHeight:window.innerWidth,r.current.h=90===n.current?window.innerWidth:e.offsetHeight,document.documentElement.removeChild(e),e=null}),[]),o=Object(a.useCallback)((()=>e?t?(c(),90!==Math.abs(window.orientation)?r.current.h:r.current.w):window.innerHeight:0),[c,e,t]),i=Object(a.useCallback)((()=>({width:e?window.innerWidth:0,height:o()})),[o,e]),[l,s]=Object(a.useState)((()=>i()));return Object(a.useEffect)((()=>{const e=()=>{s(i())};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[i,e]),l}},function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(2);const r="system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",c={base:{rgbBlack:"0 0 0",rgbWhite:"255 255 255",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:r,fontStack:`Gotham, ${r}`,monoFontStack:"SFMono Regular, Roboto Mono, Consolas, Liberation Mono, Menlo, Courier, monospace",japaneseFontStack:"\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, \u30e1\u30a4\u30ea\u30aa, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:Object(a.e)(140),fontSizeH1:Object(a.e)(100),fontSizeH2:Object(a.e)(58),fontSizeH3:Object(a.e)(38),fontSizeH4:Object(a.e)(28),fontSizeBodyXL:Object(a.e)(22),fontSizeBodyL:Object(a.e)(20),fontSizeBodyM:Object(a.e)(18),fontSizeBodyS:Object(a.e)(16),fontSizeBodyXS:Object(a.e)(14),lineHeightTitle:"1.1",lineHeightBody:"1.5",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px"},desktop:{fontSizeH0:Object(a.e)(120),fontSizeH1:Object(a.e)(80)},laptop:{maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:Object(a.e)(100),fontSizeH1:Object(a.e)(70),fontSizeH2:Object(a.e)(52),fontSizeH3:Object(a.e)(36),fontSizeH4:Object(a.e)(26)},tablet:{fontSizeH0:Object(a.e)(80),fontSizeH1:Object(a.e)(60),fontSizeH2:Object(a.e)(48),fontSizeH3:Object(a.e)(32),fontSizeH4:Object(a.e)(24)},mobile:{spaceOuter:"24px",fontSizeH0:Object(a.e)(56),fontSizeH1:Object(a.e)(40),fontSizeH2:Object(a.e)(34),fontSizeH3:Object(a.e)(28),fontSizeH4:Object(a.e)(22),fontSizeBodyL:Object(a.e)(18),fontSizeBodyM:Object(a.e)(16),fontSizeBodyS:Object(a.e)(14)},mobileS:{spaceOuter:"16px",fontSizeH0:Object(a.e)(42),fontSizeH1:Object(a.e)(38),fontSizeH2:Object(a.e)(28),fontSizeH3:Object(a.e)(24),fontSizeH4:Object(a.e)(20)}},o={dark:{themeId:"dark",rgbBackground:"17 17 17",rgbBackgroundLight:"26 26 26",rgbPrimary:"0 229 255",rgbAccent:"0 229 255",rgbText:"255 255 255",rgbError:"255 0 60",colorTextTitle:"rgb(var(--rgbText) / 1)",colorTextBody:"rgb(var(--rgbText) / 0.8)",colorTextLight:"rgb(var(--rgbText) / 0.6)"},light:{themeId:"light",rgbBackground:"242 242 242",rgbBackgroundLight:"255 255 255",rgbPrimary:"0 0 0",rgbAccent:"0 229 255",rgbText:"0 0 0",rgbError:"210 14 60",colorTextTitle:"rgb(var(--rgbText) / 1)",colorTextBody:"rgb(var(--rgbText) / 0.7)",colorTextLight:"rgb(var(--rgbText) / 0.6)"}}},,,,function(e,t,n){"use strict";var a,r=n(4),c=n.n(r),o=n(0);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l({title:e,titleId:t,...n},r){return o.createElement("svg",i({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,a||(a=o.createElement("path",{d:"M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"})))}const s=o.forwardRef(l);var u;n.p;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h({title:e,titleId:t,...n},a){return o.createElement("svg",d({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,u||(u=o.createElement("path",{fillRule:"evenodd",d:"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10A10 10 0 012 12zm14.86-6.09A7.726 7.726 0 0012 4.2c-.57 0-1.12.07-1.66.18.66.87 1.66 2.29 2.69 4.27 1.47-.65 2.81-1.51 3.83-2.74zM8.55 5c.55.65 1.63 2.06 2.79 4.25-2.34.71-4.73.87-6.16.87h-.13c-.24 0-.45 0-.62-.01C5 7.87 6.5 6 8.55 5zM4.2 11.89V12c0 1.91.7 3.66 1.84 5 .41-.61 1.12-1.54 2.15-2.5 1.08-.97 2.54-1.96 4.4-2.58-.15-.36-.3-.7-.45-1.03-2.78.87-5.52 1-7.08 1.01h-.01c-.34 0-.63 0-.85-.01zm12.22 6.53A57.5 57.5 0 0015 13.17c.5-.07 1-.11 1.58-.11h.02c.93 0 1.95.12 3.06.37a7.788 7.788 0 01-3.24 4.99zM12 19.8c-1.74 0-3.34-.57-4.64-1.54.28-.45.87-1.32 1.82-2.22.96-.93 2.32-1.89 4.05-2.46.59 1.67 1.13 3.57 1.54 5.71-.86.33-1.77.51-2.77.51zm6.13-12.62a7.823 7.823 0 011.66 4.45 15.32 15.32 0 00-3.19-.35h-.01c-.8 0-1.55.07-2.26.19l-.027-.067c-.16-.395-.313-.774-.493-1.143 1.58-.69 3.09-1.68 4.32-3.08z"})))}const b=o.forwardRef(h);var f;n.p;function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function j({title:e,titleId:t,...n},a){return o.createElement("svg",m({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,f||(f=o.createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"})))}const p=o.forwardRef(j);var v;n.p;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g({title:e,titleId:t,...n},a){return o.createElement("svg",O({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,v||(v=o.createElement("path",{d:"M12.875 3.516L12 1.932l-.875 1.584-9.393 17L.912 22h22.175l-.82-1.484-9.392-17zM19.697 20H4.303L12 6.068 19.697 20zM11 15v-4h2v4h-2zm0 3v-2h2v2h-2z"})))}const x=o.forwardRef(g);var w;n.p;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _({title:e,titleId:t,...n},a){return o.createElement("svg",y({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,w||(w=o.createElement("path",{d:"M22 6H2V4h20v2zM2 13h16v-2H2v2zm0 7h20v-2H2v2z"})))}const z=o.forwardRef(_);var S;n.p;function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function E({title:e,titleId:t,...n},a){return o.createElement("svg",k({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,S||(S=o.createElement("path",{d:"M14.207 4.793l6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L17.586 13H3v-2h14.586l-4.793-4.793 1.414-1.414z"})))}const M=o.forwardRef(E);var N;n.p;function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function L({title:e,titleId:t,...n},a){return o.createElement("svg",H({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,N||(N=o.createElement("path",{d:"M13.586 12L7.793 6.207l1.414-1.414 6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L13.586 12z"})))}const B=o.forwardRef(L);var I;n.p;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function P({title:e,titleId:t,...n},a){return o.createElement("svg",C({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,I||(I=o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))}const R=o.forwardRef(P);var $;n.p;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function W({title:e,titleId:t,...n},a){return o.createElement("svg",T({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,$||($=o.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"})))}const A=o.forwardRef(W);var F;n.p;function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function V({title:e,titleId:t,...n},a){return o.createElement("svg",X({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,F||(F=o.createElement("path",{d:"M8 5v14l11-7z"})))}const U=o.forwardRef(V);var G;n.p;function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D({title:e,titleId:t,...n},a){return o.createElement("svg",J({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,G||(G=o.createElement("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})))}const q=o.forwardRef(D);var K;n.p;function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Q({title:e,titleId:t,...n},a){return o.createElement("svg",Y({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,K||(K=o.createElement("path",{fillRule:"evenodd",d:"M15 10a2 2 0 100 4 2 2 0 000-4zm-2 5.464A4 4 0 0017.646 9 4 4 0 0015 2H9a4 4 0 00-2.646 7 4.01 4.01 0 00-.818 1 4 4 0 00.818 5 3.977 3.977 0 00-.818 1A4 4 0 1013 18v-2.536zM11 16H9a2 2 0 102 2v-2zM9 8h2V4H9a2 2 0 100 4zm0 2a2 2 0 100 4h2v-4H9zm4-2V4h2a2 2 0 010 4h-2z"})))}const Z=o.forwardRef(Q);var ee;n.p;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ne({title:e,titleId:t,...n},a){return o.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,ee||(ee=o.createElement("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})))}const ae=o.forwardRef(ne);n.p,n(44);var re=n(1);const ce={twitter:s,dribbble:b,github:p,error:x,instgram:ae,menu:z,arrowRight:M,chevronRight:B,close:R,send:A,play:U,pause:q,figma:Z};t.a=({icon:e,style:t,className:n,...a})=>{const r=ce[e];return Object(re.jsx)(r,{"aria-hidden":!0,className:c()("icon",n),...a})}},,function(e,t,n){"use strict";function a(e){e.currentTarget.blur()}n.d(t,"a",(function(){return a}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return W}));var a=n(0),r=n(15),c=n(5),o=n(56),i=n(57),l=n(4),s=n.n(l),u=n(20),d=n(9),h=(n(42),n(1));var b=function({highlight:e,className:t,...n}){const a=`monogram-clip-${Object(d.c)()}`;return Object(h.jsxs)("svg",{"aria-hidden":!0,className:s()("monogram",t),width:"46",height:"29",viewBox:"0 0 46 29",...n,children:[Object(h.jsx)("defs",{children:Object(h.jsx)("clipPath",{id:a,children:Object(h.jsx)("path",{d:"M16.525 28.462l7.18-18.35.003-.001 9.72 18.442a.838.838 0 001.524-.093l3.39-8.824a.846.846 0 00-.04-.686L30.307 3.605A6.698 6.698 0 0024.367 0h-4.6a.84.84 0 00-.74 1.23l3.63 6.887-3.655 9.15-7.12-13.662A6.698 6.698 0 005.942 0h-4.6a.842.842 0 00-.748 1.23L15 28.554a.839.839 0 001.524-.092zM42.392 8.806a.835.835 0 00.387-.446v.001l2.67-7.23a.838.838 0 00-.785-1.129h-6.578a.837.837 0 00-.736 1.238l3.907 7.226c.22.41.729.56 1.135.34z"})})}),Object(h.jsx)("rect",{clipPath:`url(#${a})`,width:"100%",height:"100%"}),e&&Object(h.jsx)("g",{clipPath:`url(#${a})`,children:Object(h.jsx)("rect",{className:"monogram__highlight",width:"100%",height:"100%"})})]})},f=n(14),m=n(23);n(50);var j=({menuOpen:e,...t})=>{const n=s()("nav-toggle__icon",{"nav-toggle__icon--open":e});return Object(h.jsx)(m.a,{iconOnly:!0,className:"nav-toggle","aria-label":"Menu","aria-expanded":e,...t,children:Object(h.jsxs)("div",{className:"nav-toggle__inner",children:[Object(h.jsx)(f.a,{className:s()(n,"nav-toggle__icon--menu"),open:e,icon:"menu"}),Object(h.jsx)(f.a,{className:s()(n,"nav-toggle__icon--close"),open:e,icon:"close"})]})})};n(51);var p=({isMobile:e,...t})=>{const{dispatch:n,theme:a}=Object(d.a)(),r="dark"===a,c=`theme-toggle-mask-${Object(d.c)()}`;return Object(h.jsx)(m.a,{iconOnly:!0,className:s()("theme-toggle",{"theme-toggle--mobile":e}),"aria-label":"Toggle theme",onClick:()=>{n({type:"toggleTheme"})},...t,children:Object(h.jsxs)("svg",{"aria-hidden":!0,className:"theme-toggle__svg",width:"38",height:"38",viewBox:"0 0 38 38",children:[Object(h.jsx)("defs",{children:Object(h.jsxs)("mask",{id:c,children:[Object(h.jsx)("circle",{className:s()("theme-toggle__circle","theme-toggle__circle--mask",{"theme-toggle__circle--dark":r}),cx:"19",cy:"19",r:"13"}),Object(h.jsx)("circle",{className:s()("theme-toggle__mask",{"theme-toggle__mask--dark":r}),cx:"25",cy:"14",r:"9"})]})}),Object(h.jsx)("path",{className:s()("theme-toggle__path",{"theme-toggle__path--dark":r}),d:"M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"}),Object(h.jsx)("circle",{className:s()("theme-toggle__circle",{"theme-toggle__circle--dark":r}),mask:`url(#${c})`,cx:"19",cy:"19",r:"12"})]})})};const v=[{label:"Projects",pathname:"/",hash:"#project-1"},{label:"Details",pathname:"/",hash:"#details"},{label:"Contact",pathname:"/contact"}],O=[{label:"Instgram",url:"https://www.instagram.com/watan.asaad/",icon:"instgram"},{label:"Figma",url:"https://www.figma.com/@WatanAsaad",icon:"figma"},{label:"Github",url:"https://github.com/ixWatan",icon:"github"}];var g=n(21),x=n(2),w=n(10),y=n(16);n(52);const _=()=>Object(h.jsx)("div",{className:"navbar__nav-icons",children:O.map((({label:e,url:t,icon:n})=>Object(h.jsx)("a",{className:"navbar__nav-icon-link","aria-label":e,href:t,onMouseUp:y.a,target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)(f.a,{className:"navbar__nav-icon",icon:n})},e)))});function z(e){const{menuOpen:t,dispatch:n}=Object(d.a)(),{location:c}=e,[o,l]=Object(a.useState)(),s=Object(d.l)(),u=Object(a.useRef)(),f=s.width<=x.a.mobile||s.height<=696,m=()=>{l(Math.random().toString(32).substr(2,8))},O=()=>{m(),t&&n({type:"toggleMenu"})};return Object(h.jsxs)("header",{className:"navbar",ref:u,children:[Object(h.jsx)(r.b,{className:"navbar__logo",to:{pathname:"/",hash:"#intro",state:o},"aria-label":"Hamish Williams, Designer",onClick:O,onMouseUp:y.a,children:Object(h.jsx)(b,{highlight:!0})}),Object(h.jsx)(j,{onClick:()=>n({type:"toggleMenu"}),menuOpen:t}),Object(h.jsxs)("nav",{className:"navbar__nav",children:[Object(h.jsx)("div",{className:"navbar__nav-list",children:v.map((({label:e,pathname:t,hash:n})=>Object(h.jsx)(r.c,{exact:!0,className:"navbar__nav-link",activeClassName:"navbar__nav-link--active",isActive:e=>(({match:e,hash:t=""})=>!!e&&`${e.url}${t}`===`${c.pathname}${c.hash}`)({match:e,hash:n}),onClick:m,to:{pathname:t,hash:n,state:o},onMouseUp:y.a,children:e},e)))}),Object(h.jsx)(_,{})]}),Object(h.jsx)(i.a,{mountOnEnter:!0,unmountOnExit:!0,in:t,timeout:{enter:0,exit:Object(x.b)(w.b.base.durationL)},onEnter:g.b,children:e=>Object(h.jsxs)("nav",{className:`navbar__mobile-nav navbar__mobile-nav--${e}`,children:[v.map((({label:t,pathname:n,hash:a},c)=>Object(h.jsx)(r.c,{className:`navbar__mobile-nav-link navbar__mobile-nav-link--${e}`,activeClassName:"navbar__mobile-nav-link--active",onClick:O,to:{pathname:n,hash:a,state:o},onMouseUp:y.a,style:{transitionDelay:Object(x.c)(Number(Object(x.b)(w.b.base.durationS))+50*c)},children:t},t))),Object(h.jsx)(_,{}),Object(h.jsx)(p,{isMobile:!0})]})}),!f&&Object(h.jsx)(p,{})]})}var S=Object(a.memo)(z),k=n(28),E=n(22),M=n(27);const N={menuOpen:!1,theme:"dark"};function H(e,t){const{type:n,value:a}=t;switch(n){case"setTheme":return{...e,theme:a};case"toggleTheme":{const t="dark"===e.theme?"light":"dark";return{...e,theme:t}}case"toggleMenu":return{...e,menuOpen:!e.menuOpen};default:throw new Error}}n(53),n(54);const L=Object(a.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(5)]).then(n.bind(null,113)))),B=Object(a.lazy)((()=>Promise.all([n.e(1),n.e(7)]).then(n.bind(null,117)))),I=Object(a.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(14),n.e(0),n.e(11)]).then(n.bind(null,112)))),C=Object(a.lazy)((()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,114)))),P=Object(a.lazy)((()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,115)))),R=Object(a.lazy)((()=>Promise.all([n.e(1),n.e(10)]).then(n.bind(null,118)))),$=Object(a.lazy)((()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,116)))),T=Object(a.createContext)(),W=Object(a.createContext)(),A=()=>{const e=Object(c.f)(),{pathname:t}=e;return Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)(u.a,{children:Object(h.jsx)("link",{rel:"canonical",href:`https://hamishw.com${t}`})}),Object(h.jsx)(E.a,{showOnFocus:!0,as:"a",className:"skip-to-main",href:"#MainContent",children:"Skip to main content"}),Object(h.jsx)(S,{location:e}),Object(h.jsx)(o.a,{component:"main",className:"app",tabIndex:-1,id:"MainContent",children:Object(h.jsx)(i.a,{timeout:Object(x.b)(w.b.base.durationS),onEnter:g.b,children:t=>Object(h.jsx)(W.Provider,{value:{status:t},children:Object(h.jsx)("div",{className:s()("app__page",`app__page--${t}`),children:Object(h.jsx)(a.Suspense,{fallback:Object(h.jsx)(a.Fragment,{}),children:Object(h.jsxs)(c.c,{location:e,children:[Object(h.jsx)(c.a,{exact:!0,path:"/",component:L}),Object(h.jsx)(c.a,{path:"/contact",component:B}),Object(h.jsx)(c.a,{path:"/projects/recorderr",component:I}),Object(h.jsx)(c.a,{path:"/projects/game",component:C}),Object(h.jsx)(c.a,{path:"/projects/listivo",component:P}),Object(h.jsx)(c.a,{path:"/uses",component:$}),Object(h.jsx)(c.a,{component:R})]})})})})},t)})]})};t.c=()=>{const[e]=Object(d.f)("theme","dark"),[t,n]=Object(a.useReducer)(H,N);return Object(a.useEffect)((()=>{M.a||console.info("\n__  __  __\n\\ \\ \\ \\ \\\u2215\n \\ \\\u2215\\ \\\n  \\\u2215  \\\u2215\n\n\nTaking a peek huh? Well you are here anyway so go add me on discord, ixWatan_ \ud83c\uddf5\ud83c\uddf8\ud83d\udda4#9219\n\n\n"),window.history.scrollRestoration="manual"}),[]),Object(a.useEffect)((()=>{n({type:"setTheme",value:e})}),[e]),Object(h.jsx)(T.Provider,{value:{...t,dispatch:n},children:Object(h.jsx)(k.b,{themeId:t.theme,children:Object(h.jsx)(r.a,{children:Object(h.jsx)(A,{})})})})}},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const a=["entering","entered"],r=e=>a.includes(e),c=e=>e&&e.offsetHeight},function(e,t,n){"use strict";var a=n(4),r=n.n(a),c=(n(45),n(1));t.a=({className:e,showOnFocus:t,as:n="span",children:a,visible:o,...i})=>Object(c.jsx)(n,{className:r()("visually-hidden",e,{"visually-hidden--hidden":!o&&!t,"visually-hidden--show-on-focus":t}),...i,children:a})},function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n(4),c=n.n(r),o=n(15),i=n(13),l=n(9),s=n(2),u=n(22),d=(n(46),n(1));var h=({className:e,style:t,size:n=32,text:a="Loading...",...r})=>{const o=()=>Object(i.createPortal)(Object(d.jsx)(u.a,{className:"loader-announcement","aria-live":"assertive",children:a}),document.body);if(Object(l.h)())return Object(d.jsxs)("div",{className:"loader-text",...r,children:[a,o()]});const h=Math.round(n/3*.2),b=Math.round(n/3-2*h-1);return Object(d.jsxs)("div",{className:c()("loader",e),"aria-label":a,style:{"--size":Object(s.d)(n),"--spanSize":Object(s.d)(b),"--gapSize":Object(s.d)(h),...t},...r,children:[Object(d.jsxs)("div",{className:"loader__content",children:[Object(d.jsx)("div",{className:"loader__span"}),Object(d.jsx)("div",{className:"loader__span"}),Object(d.jsx)("div",{className:"loader__span"})]}),o()]})},b=n(14),f=n(16);n(47);const m=Object(a.forwardRef)((({className:e,as:t,secondary:n,loading:a,loadingText:r="loading",icon:i,iconEnd:l,iconHoverShift:s,iconOnly:u,children:m,rel:j,target:p,href:v,...O},g)=>{const x=null===v||void 0===v?void 0:v.includes("://"),w=x||"#"===(null===v||void 0===v?void 0:v[0])?"a":o.b,y=t||(v?w:"button");return Object(d.jsxs)(y,{className:c()("button",e,{"button--loading":a,"button--icon-only":u,"button--secondary":n}),href:v&&x?v:void 0,to:v&&!x?v:void 0,rel:j||x?"noopener noreferrer":void 0,target:p||x?"_blank":void 0,onMouseUp:f.a,ref:g,...O,children:[!!i&&Object(d.jsx)(b.a,{className:c()("button__icon",{"button__icon--start":!u,"button__icon--shift":s}),icon:i}),!!m&&Object(d.jsx)("span",{className:"button__text",children:m}),!!l&&Object(d.jsx)(b.a,{className:c()("button__icon",{"button__icon--end":!u,"button__icon--shift":s}),icon:l}),a&&Object(d.jsx)(h,{className:"button__loader",size:32,text:r})]})}))},,,,function(e,t,n){"use strict";const a="ReactSnap"===navigator.userAgent;t.a=a},function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return f}));var a=n(0),r=n(20),c=n(4),o=n.n(c);var i=function(){return Object(a.useContext)(f)},l=n(10),s=n(2),u=n.p+"static/media/gotham-book.9c2a0ce4.woff2",d=n.p+"static/media/gotham-medium.0ad7d622.woff2",h=n(1);const b=`\n  @font-face {\n    font-family: "Gotham";\n    font-weight: 400;\n    src: url(${u}) format("woff");\n    font-display: swap;\n  }\n\n  @font-face {\n    font-family: "Gotham";\n    font-weight: 500;\n    src: url(${d}) format("woff2");\n    font-display: swap;\n  }\n`,f=Object(a.createContext)({});function m(e){return Object.keys(e).filter((e=>"themeId"!==e)).map((t=>`--${t}: ${e[t]};`)).join("\n")}function j(e){let t={};for(const n of Object.keys(e))"themeId"!==n&&(t[`--${n}`]=e[n]);return t}const p=`\n  :root {\n    ${m(l.b.base)}\n  }\n\n  ${Object.keys(s.a).map((e=>`\n        @media (max-width: ${s.a[e]}px) {\n          :root {\n            ${m(l.b[e])}\n          }\n        }\n      `)).join("\n")}\n\n  .dark {\n    ${m(l.a.dark)}\n  }\n\n  .light {\n    ${m(l.a.light)}\n  }\n`;t.b=({themeId:e="dark",theme:t,children:n,className:c,as:s="div"})=>{const m={...l.a[e],...t},v=!i().themeId;return Object(a.useEffect)((()=>{v&&(window.localStorage.setItem("theme",JSON.stringify(e)),document.body.classList.remove("light","dark"),document.body.classList.add(e))}),[e,v]),Object(h.jsxs)(f.Provider,{value:m,children:[v&&Object(h.jsxs)(a.Fragment,{children:[Object(h.jsxs)(r.a,{children:[Object(h.jsx)("link",{rel:"preload",href:d,as:"font",crossorigin:""}),Object(h.jsx)("link",{rel:"preload",href:u,as:"font",crossorigin:""}),Object(h.jsx)("style",{children:b}),Object(h.jsx)("style",{children:p})]}),n]}),!v&&Object(h.jsx)(s,{className:o()("theme-provider",c),style:j(m),children:n})]})}},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(17),c=n(1);const o=document.getElementById("root");o.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(r.c,{}),o):Object(a.render)(Object(c.jsx)(r.c,{}),o)},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){}],[[35,4,6]]]);
//# sourceMappingURL=main.51dc2a02.chunk.js.map