var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,o,i,a,u,l,s,f,d,c,p,h,v,m,g,b,y,j,w,x,S={961:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(43),t.e(961)]).then((()=>()=>t(342))),"./extension":()=>Promise.all([t.e(43),t.e(961)]).then((()=>()=>t(342)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),i=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>i})}},P={};function k(e){var r=P[e];if(void 0!==r)return r.exports;var t=P[e]={exports:{}};return S[e](t,t.exports,k),t.exports}k.m=S,k.c=P,k.amdO={},k.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return k.d(r,{a:r}),r},k.d=(e,r)=>{for(var t in r)k.o(r,t)&&!k.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((r,t)=>(k.f[t](e,r),r)),[])),k.u=e=>e+"."+{78:"2514757bd83af1e88044",565:"bcf8fd658aff6da136e9",753:"658bb97ee9fac045c42e",927:"29e0b8bc4db0cd4a9d3b",961:"acccdd2dc4a19b7f3ec6"}[e]+".js?v="+{78:"2514757bd83af1e88044",565:"bcf8fd658aff6da136e9",753:"658bb97ee9fac045c42e",927:"29e0b8bc4db0cd4a9d3b",961:"acccdd2dc4a19b7f3ec6"}[e],k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@jupyterlite/xeus-extension:",k.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var a,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+o){a=f;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,k.nc&&a.setAttribute("nonce",k.nc),a.setAttribute("data-webpack",r+o),a.src=t),e[t]=[n];var d=(r,n)=>{a.onerror=a.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),u&&document.head.appendChild(a)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{k.S={};var e={},r={};k.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];k.o(k.S,t)||(k.S[t]={});var i=k.S[t],a="@jupyterlite/xeus-extension",u=(e,r,t,n)=>{var o=i[e]=i[e]||{},u=o[r];(!u||!u.loaded&&(!n!=!u.eager?n:a>u.from))&&(o[r]={get:t,from:a,eager:!!n})},l=[];return"default"===t&&(u("@jupyterlite/xeus-extension","3.1.0",(()=>Promise.all([k.e(43),k.e(961)]).then((()=>()=>k(342))))),u("@jupyterlite/xeus","3.1.0",(()=>Promise.all([k.e(927),k.e(565),k.e(43)]).then((()=>()=>k(565)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;k.g.importScripts&&(e=k.g.location+"");var r=k.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),k.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],i=(typeof o)[0];if(n>=r.length)return"u"==i;var a=r[n],u=(typeof a)[0];if(i!=u)return"o"==i&&"n"==u||"s"==u||"u"==i;if("o"!=i&&"u"!=i&&o!=a)return o<a;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,i=1;i<e.length;i++)n--,t+="u"==(typeof(u=e[i]))[0]?"-":(n>0?".":"")+(n=2,u);return t}var a=[];for(i=1;i<e.length;i++){var u=e[i];a.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?a.pop()+" "+a.pop():o(u))}return l();function l(){return a.pop().replace(/^\((.+)\)$/,"$1")}},i=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var a=0,u=1,l=!0;;u++,a++){var s,f,d=u<e.length?(typeof e[u])[0]:"";if(a>=r.length||"o"==(f=(typeof(s=r[a]))[0]))return!l||("u"==d?u>n&&!o:""==d!=o);if("u"==f){if(!l||"u"!=d)return!1}else if(l)if(d==f)if(u<=n){if(s!=e[u])return!1}else{if(o?s>e[u]:s<e[u])return!1;s!=e[u]&&(l=!1)}else if("s"!=d&&"n"!=d){if(o||u<=n)return!1;l=!1,u--}else{if(u<=n||f<d!=o)return!1;l=!1}else"s"!=d&&"n"!=d&&(l=!1,u--)}}var c=[],p=c.pop.bind(c);for(a=1;a<e.length;a++){var h=e[a];c.push(1==h?p()|p():2==h?p()&p():h?i(h,r):!p())}return!!p()},a=(e,r)=>e&&k.o(e,r),u=e=>(e.loaded=1,e.get()),l=e=>Object.keys(e).reduce(((r,t)=>(e[t].eager&&(r[t]=e[t]),r)),{}),s=(e,r,t,o)=>{var a=o?l(e[r]):e[r];return(r=Object.keys(a).reduce(((e,r)=>!i(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},f=(e,r,t)=>{var o=t?l(e[r]):e[r];return Object.keys(o).reduce(((e,r)=>!e||!o[e].loaded&&n(e,r)?r:e),0)},d=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",c=(e,r,t,n,i)=>{var a=e[t];return"No satisfying version ("+o(n)+")"+(i?" for eager consumption":"")+" of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(a).map((e=>e+" from "+a[e].from)).join(", ")},p=e=>{throw new Error(e)},h=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},m=(e,r,t)=>t?t():((e,r)=>p("Shared module "+r+" doesn't exist in shared scope "+e))(e,r),g=(v=e=>function(r,t,n,o,i){var a=k.I(r);return a&&a.then&&!n?a.then(e.bind(e,r,k.S[r],t,!1,o,i)):e(r,k.S[r],t,n,o,i)})(((e,r,t,n,o,i)=>{if(!a(r,t))return m(e,t,i);var l=s(r,t,o,n);return l?u(l):i?i():void p(c(r,e,t,o,n))})),b=v(((e,r,t,n,o,l)=>{if(!a(r,t))return m(e,t,l);var s=f(r,t,n);return i(o,s)||h(d(r,t,s,o)),u(r[t][s])})),y={},j={258:()=>b("default","@jupyterlite/contents",!1,[,[2,0,5,0],[2,0,4,5],[2,0,3,0],[2,0,2,0],1,1,1]),262:()=>b("default","@lumino/coreutils",!1,[1,2,0,0]),367:()=>b("default","@jupyterlab/coreutils",!1,[1,6,2,7]),98:()=>g("default","@jupyterlite/xeus",!1,[1,3,1,0],(()=>Promise.all([k.e(927),k.e(565)]).then((()=>()=>k(565))))),363:()=>b("default","@jupyterlite/kernel",!1,[,[2,0,5,0],[2,0,4,5],[2,0,3,0],[2,0,2,0],1,1,1]),509:()=>b("default","@jupyterlite/server",!1,[,[2,0,5,0],[2,0,4,5],[2,0,3,0],[2,0,2,0],1,1,1]),602:()=>b("default","@lumino/signaling",!1,[1,2,0,0])},w={43:[258,262,367],565:[602],961:[98,363,509]},x={},k.f.consumes=(e,r)=>{k.o(w,e)&&w[e].forEach((e=>{if(k.o(y,e))return r.push(y[e]);if(!x[e]){var t=r=>{y[e]=0,k.m[e]=t=>{delete k.c[e],t.exports=r()}};x[e]=!0;var n=r=>{delete y[e],k.m[e]=t=>{throw delete k.c[e],r}};try{var o=j[e]();o.then?r.push(y[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))},(()=>{k.b=document.baseURI||self.location.href;var e={786:0};k.f.j=(r,t)=>{var n=k.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(43!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var i=k.p+k.u(r),a=new Error;k.l(i,(t=>{if(k.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[i,a,u]=t,l=0;if(i.some((r=>0!==e[r]))){for(n in a)k.o(a,n)&&(k.m[n]=a[n]);u&&u(k)}for(r&&r(t);l<i.length;l++)o=i[l],k.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk_jupyterlite_xeus_extension=self.webpackChunk_jupyterlite_xeus_extension||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var E=k(961);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyterlite/xeus-extension"]=E})();