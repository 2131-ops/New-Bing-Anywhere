"use strict";(()=>{var n="113",i="113.0.1774.57";var a="2.1.4";var u=()=>{try{return chrome.i18n.getUILanguage().toLowerCase()==="zh-cn"}catch{return!1}},p=()=>{try{let e=chrome.i18n.getUILanguage().toLowerCase();return e==="zh-cn"||e==="zh-tw"||e==="zh-hk"||e==="zh"}catch{return!1}};var C=(()=>{let e="v1";return{get:async t=>{t=`${e}:${t}`;let{data:r,maxAge:o,lastModified:l}=(await chrome.storage.local.get(t))?.[t]??{};return Date.now()-l>o*1e3?(chrome.storage.local.remove(t),null):r},set:async(t,r,o=1/0)=>{t=`${e}:${t}`,await chrome.storage.local.set({[t]:{data:r,lastModified:Date.now(),maxAge:o}})}}})();var s=navigator.userAgent,h=navigator.userAgentData,d=s.includes("Macintosh"),T=s.includes("Firefox"),m=s.includes("Edg/"),I=h?.brands.findIndex(e=>e.brand==="Brave")>-1,w=p(),B=u(),y=!!globalThis.__NBA_isCanary,P=y?`0.${a}`:a,c=()=>{let e=s;return m||(d?e=`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${n}.0.0.0 Safari/537.36 Edg/${i}`:e=`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${n}.0.0.0 Safari/537.36 Edg/${i}`),e};try{let e=c();Object.defineProperty(navigator,"userAgent",{get:()=>e});let t=navigator.userAgentData,r=t?.brands;Array.isArray(r)&&Object.defineProperty(navigator,"userAgentData",{get:()=>({...JSON.parse(JSON.stringify(t)),brands:[{brand:"Microsoft Edge",version:n},{brand:"Chromium",version:n},{brand:"Not-A.Brand",version:"24"}]})})}catch{}})();
