(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,c){},58:function(e,t,c){"use strict";var n=c(0),a=c(4),s=c.n(a),i=c(20),r=c.p+"static/media/gotham-bold.73ce573b.woff2",o=(c(60),c(1));t.a=({children:e,level:t=1,as:c,align:a="auto",weight:l="medium",className:d,...j})=>{const u=Math.min(Math.max(t,0),4),m=c||`h${Math.max(u,1)}`;return Object(o.jsxs)(n.Fragment,{children:["bold"===l&&Object(o.jsxs)(i.a,{children:[Object(o.jsx)("link",{rel:"preload",href:r,as:"font",crossorigin:""}),Object(o.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${r}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(o.jsx)(m,{className:s()(d,"heading",`heading--align-${a}`,`heading--level-${u}`,`heading--weight-${l}`),...j,children:e})]})}},59:function(e,t,c){"use strict";var n=c(4),a=c.n(n),s=(c(62),c(1));t.a=({children:e,size:t="m",as:c="p",align:n="auto",weight:i="auto",secondary:r,className:o,...l})=>Object(s.jsx)(c,{className:a()(o,"text",`text--align-${n}`,`text--size-${t}`,`text--weight-${i}`,{"text--secondary":r}),...l,children:e})},60:function(e,t,c){},61:function(e,t,c){"use strict";var n=c(0),a=c(4),s=c.n(a),i=(c(69),c(1));const r=Object(n.forwardRef)((({as:e="div",children:t,className:c,...n},a)=>Object(i.jsx)(e,{className:s()("section",c),ref:a,...n,children:t})));t.a=r},62:function(e,t,c){},65:function(e,t,c){"use strict";var n=c(0),a=c(4),s=c.n(a),i=c(9),r=c(23),o=c(14),l=c(57),d=c(21),j=c(27),u=c(10),m=c(2),h=c(71),b=c(28),p=c(22),_=(c(77),c(1));const f=({onLoad:e,loaded:t,inViewport:c,srcSet:a,placeholder:b,delay:f,src:g,alt:v,play:O=!0,reveal:x,...w})=>{const N=Object(i.h)(),[y,k]=Object(n.useState)(!0),[S,$]=Object(n.useState)(!N),[E,L]=Object(n.useState)(!1),[R,M]=Object(n.useState)(!1),[z,D]=Object(n.useState)(!1),[F,P]=Object(n.useState)(),[C,I]=Object(n.useState)(),V=Object(n.useRef)(),W=Object(n.useRef)(),A=null===g||void 0===g?void 0:g.endsWith(".mp4"),H=g||(null===a||void 0===a?void 0:a.split(" ")[0]),J=!j.a&&c;Object(n.useEffect)((()=>{const e=()=>{k(!1)},t=V.current;return t.addEventListener("transitionend",e),function(){t&&t.removeEventListener("transitionend",e)}}),[]),Object(n.useEffect)((()=>{A&&a?(async()=>{const e=await Object(h.b)(a);I(e)})():A&&I(g)}),[A,g,a]),Object(n.useEffect)((()=>{const{width:e,height:t}=V.current;e&&t&&P({width:e,height:t})}),[]),Object(n.useEffect)((()=>{W.current&&C&&(O&&c?!c||N||j.a||($(!0),W.current.play()):($(!1),W.current.pause()))}),[c,O,N,C]);const U=e=>{e.preventDefault(),W.current.paused?($(!0),W.current.play()):($(!1),W.current.pause())},B=()=>{L(!0),D(!0)};return Object(_.jsxs)("div",{className:s()("image__element-wrapper",{"image__element-wrapper--reveal":x,"image__element-wrapper--in-viewport":c}),onMouseOver:A?()=>{L(!0),M(!0)}:void 0,onMouseOut:A?()=>M(!1):void 0,style:{"--delay":Object(m.c)(f+1e3)},children:[A&&Object(_.jsxs)(n.Fragment,{children:[Object(_.jsx)("video",{muted:!0,loop:!0,playsInline:!0,className:s()("image__element",{"image__element--loaded":t}),autoPlay:!N,role:"img",onLoadStart:e,src:C,"aria-label":v,ref:W,...w}),Object(_.jsx)(l.a,{in:R||z,onExit:d.b,onExited:()=>L(!1),timeout:{enter:0,exit:Object(m.b)(u.b.base.durationS)},children:e=>Object(_.jsx)(p.a,{visible:E,children:Object(_.jsxs)(r.a,{className:s()("image__button",`image__button--${e}`),onFocus:B,onBlur:()=>D(!1),onClick:U,children:[Object(_.jsx)(o.a,{icon:S?"pause":"play"}),S?"Pause":"Play"]})})})]}),!A&&Object(_.jsx)("img",{className:s()("image__element",{"image__element--loaded":t}),onLoad:e,decoding:"async",src:J?H:void 0,srcSet:J?a:void 0,width:null===F||void 0===F?void 0:F.width,height:null===F||void 0===F?void 0:F.height,alt:v,...w}),y&&Object(_.jsx)("img",{"aria-hidden":!0,className:s()("image__placeholder",{"image__placeholder--loaded":t}),style:{"--delay":Object(m.c)(f)},ref:V,src:b,onLoad:e=>{const{width:t,height:c}=e.target;P({width:t,height:c})},width:null===F||void 0===F?void 0:F.width,height:null===F||void 0===F?void 0:F.height,decoding:"async",alt:"",role:"presentation"})]})};t.a=({className:e,style:t,reveal:c,delay:a=0,raised:r,src:o,...l})=>{const[d,j]=Object(n.useState)(!1),{themeId:u}=Object(b.c)(),h=Object(n.useRef)(),p=Object(i.d)(h,!(null===o||void 0===o?void 0:o.endsWith(".mp4"))),g=Object(n.useCallback)((()=>{j(!0)}),[]);return Object(_.jsx)("div",{className:s()("image",e,`image--${u}`,{"image--in-viewport":p,"image--reveal":c,"image--raised":r}),style:{...t,"--delay":Object(m.c)(a)},ref:h,children:Object(_.jsx)(f,{delay:a,onLoad:g,loaded:d,inViewport:p,reveal:c,src:o,...l})})}},66:function(e,t,c){"use strict";c(70),c(78);var n=c(1);t.a=()=>Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("span",{className:"footer__date",children:`\xa9 ${(new Date).getFullYear()} Watan Asaad, All Rights Reserved.`})})},69:function(e,t,c){},70:function(e,t,c){"use strict";var n=c(15),a=c(4),s=c.n(a),i=c(16),r=(c(76),c(1));const o=["txt","png","jpg"];t.a=({rel:e,target:t,children:c,secondary:a,className:l,href:d,as:j,...u})=>{const m=o.includes(null===d||void 0===d?void 0:d.split(".").pop()),h=(null===d||void 0===d?void 0:d.includes("://"))||"#"===(null===d||void 0===d?void 0:d[0])||m,b=e||(h?"noreferrer noopener":void 0),p=t||(h?"_blank":void 0),_=j||(h?"a":n.b);return Object(r.jsx)(_,{className:s()("link",l,{"link--secondary":a}),rel:b,href:h?d:void 0,to:h?void 0:d,target:p,onMouseUp:i.a,...u,children:c})}},71:function(e,t,c){"use strict";async function n({src:e,srcSet:t,sizes:c}){return new Promise(((n,a)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");const a=new Image;e&&(a.src=e),t&&(a.srcset=t),c&&(a.sizes=c);const s=()=>{a.removeEventListener("load",s);const e=a.currentSrc;n(e)};a.addEventListener("load",s)}catch(s){a(`Error loading ${t}: ${s}`)}}))}async function a(e){const t=e.split(", ").map((e=>{const[t,c]=e.split(" ");return{src:t,image:function(e=1,t=1){const c=document.createElement("canvas"),n=c.getContext("2d");c.width=e,c.height=t,n.fillStyle="rgba(0, 0, 0, 0)",n.fillRect(0,0,e,t);const a=c.toDataURL("image/png","");return c.remove(),a}(Number(c.replace("w",""))),width:c}})),c=t.map((({image:e,width:t})=>`${e} ${t}`)).join(", "),a=await n({srcSet:c});return t.find((e=>e.image===a)).src}c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return a}))},74:function(e,t,c){"use strict";c.d(t,"c",(function(){return b})),c.d(t,"b",(function(){return p})),c.d(t,"e",(function(){return _})),c.d(t,"a",(function(){return f})),c.d(t,"d",(function(){return g})),c.d(t,"g",(function(){return v})),c.d(t,"h",(function(){return O})),c.d(t,"i",(function(){return x})),c.d(t,"j",(function(){return w})),c.d(t,"f",(function(){return N}));var n=c(0),a=c(4),s=c.n(a),i=c(65),r=c(23),o=c(9),l=c(27),d=c(61),j=c(2),u=c(58),m=c(59),h=(c(100),c(1));function b({title:e,description:t,linkLabel:c="Visit website",url:n,roles:a,className:i}){return Object(h.jsx)(d.a,{className:s()("project__header",i),children:Object(h.jsxs)("div",{className:"project__header-content",style:{"--initDelay":Object(j.c)(300)},children:[Object(h.jsxs)("div",{className:"project__details",children:[Object(h.jsx)(u.a,{className:s()("project__title",{"project__title--entered":!l.a}),level:2,as:"h1",children:e}),Object(h.jsx)(m.a,{className:s()("project__description",{"project__description--entered":!l.a}),size:"xl",children:t}),!!n&&Object(h.jsx)(r.a,{secondary:!0,iconHoverShift:!0,className:s()("project__link-button",{"project__link-button--entered":!l.a}),icon:"chevronRight",href:n,children:c})]}),!!(null===a||void 0===a?void 0:a.length)&&Object(h.jsx)("ul",{className:"project__meta",children:null===a||void 0===a?void 0:a.map(((e,t)=>Object(h.jsx)("li",{className:s()("project__meta-item",{"project__meta-item--entered":!l.a}),style:{"--delay":Object(j.c)(600+140*t)},children:Object(h.jsx)(m.a,{secondary:!0,as:"span",children:e})},e)))})]})})}const p=({className:e,...t})=>Object(h.jsx)("article",{className:s()("project",e),...t}),_=Object(n.forwardRef)((({className:e,light:t,first:c,fullHeight:n,backgroundOverlayOpacity:a=.9,backgroundElement:i,children:r,...o},l)=>Object(h.jsxs)("section",{className:s()("project__section",e,{"project__section--light":t,"project__section--full-height":n}),ref:l,...o,children:[!!i&&Object(h.jsx)("div",{className:"project__section-background",style:{"--opacity":a},children:i}),Object(h.jsx)(d.a,{className:s()("project__section-inner",{"project__section-inner--first":c}),children:r})]}))),f=({opacity:e=.7,className:t,entered:c,...n})=>{const a=Object(o.g)(.6);return Object(h.jsxs)("div",{className:s()("project__background-image",t,{"project__background-image--entered":c}),children:[Object(h.jsx)("div",{className:"project__background-image-element",style:{"--offset":Object(j.d)(a)},children:Object(h.jsx)(i.a,{alt:"",role:"presentation",...n})}),Object(h.jsx)("div",{className:"project__background-scrim",style:{"--opacity":e}})]})},g=({className:e,...t})=>Object(h.jsx)("div",{className:s()("project__image",e),children:Object(h.jsx)(i.a,{reveal:!0,delay:300,...t})}),v=({className:e,width:t="l",...c})=>Object(h.jsx)("div",{className:s()("project__section-content",`project__section-content--width-${t}`,e),...c}),O=({className:e,level:t=3,as:c="h2",...n})=>Object(h.jsx)(u.a,{className:s()("project__section-heading",e),as:c,level:t,align:"auto",...n}),x=({className:e,...t})=>Object(h.jsx)(m.a,{className:s()("project__section-text",e),size:"l",...t}),w=({center:e,stretch:t,justify:c="center",width:n="m",noMargin:a,className:i,centerMobile:r,...o})=>Object(h.jsx)("div",{className:s()("project__text-row",`project__text-row--justify-${c}`,`project__text-row--width-${n}`,i,{"project__text-row--center":e,"project__text-row--stretch":t,"project__text-row--center-mobile":r,"project__text-row--no-margin":a}),...o}),N=({className:e,centered:t,...c})=>Object(h.jsx)(v,{className:s()("project__section-columns",{"project__section-columns--centered":t},e),...c})},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){}}]);
//# sourceMappingURL=0.d003d684.chunk.js.map