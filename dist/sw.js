if(!self.define){let e,i={};const o=(o,n)=>(o=new URL(o+".js",n).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let t={};const d=e=>o(e,s),c={module:{uri:s},exports:t,require:d};i[s]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-b9e6edb1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"87e55faa38ae6c9a0b39d339251cfbd4"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"logo.ico",revision:"ddedc54fe3760b960b5acf880a580209"},{url:"apple-touch-icon.png",revision:"55eb7bda629ff38781d2479f7d95dc83"},{url:"logo512.png",revision:"417a5e7d9f98e6b7da35b2044bf7a337"},{url:"manifest.webmanifest",revision:"0595d027712ec951567a756e0c821c78"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));