"use strict";(()=>{var c="https://www.bing.com/";var N=["zh-CN","ru","ru-ru"],x="113",v="113.0.1774.57",B=["csp_report","font","image","main_frame","media","object","other","ping","script","stylesheet","sub_frame","webbundle","websocket","webtransport","xmlhttprequest"];var T="2.1.4";var h={type:"git",url:"https://github.com/haozi/New-Bing-Anywhere"};var G=()=>{try{return chrome.i18n.getUILanguage().toLowerCase()==="zh-cn"}catch{return!1}},z=()=>{try{let e=chrome.i18n.getUILanguage().toLowerCase();return e==="zh-cn"||e==="zh-tw"||e==="zh-hk"||e==="zh"}catch{return!1}};var L="configV1",C=async()=>({showGoogleButtonOnBing:!0,showBingButtonOnGoogle:!0,showGuideToGithub:!0,showChat:!0,showRelease:!0,triggerMode:"Always",conversationStyle:"Balanced","X-Forwarded-For":void 0,...(await chrome.storage.sync.get(L))[L]});var E=e=>{chrome.runtime.onMessage.addListener((t,n,r)=>((async()=>{try{let{method:o,args:i}=t,s=await e[o](...i);r({code:200,msg:"ok",data:s})}catch(o){let i=o??{};r({code:500,msg:i.stack??i.message??o})}})(),!0))};var re=(()=>{let e="v1";return{get:async t=>{t=`${e}:${t}`;let{data:n,maxAge:r,lastModified:o}=(await chrome.storage.local.get(t))?.[t]??{};return Date.now()-o>r*1e3?(chrome.storage.local.remove(t),null):n},set:async(t,n,r=1/0)=>{t=`${e}:${t}`,await chrome.storage.local.set({[t]:{data:n,lastModified:Date.now(),maxAge:r}})}}})();var d=navigator.userAgent,j=navigator.userAgentData,F=d.includes("Macintosh"),oe=d.includes("Firefox"),K=d.includes("Edg/"),ie=j?.brands.findIndex(e=>e.brand==="Brave")>-1,R=z(),se=G(),w=!!globalThis.__NBA_isCanary,p=w?`0.${T}`:T,M=()=>{let e=d;return K||(F?e=`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${x}.0.0.0 Safari/537.36 Edg/${v}`:e=`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${x}.0.0.0 Safari/537.36 Edg/${v}`),e},_=async e=>{let t=h.url;try{let n=await C(),o=`${t}/issues/new?title=&body=`,i="Please write your comment ABOVE this line, provide as much detailed information and screenshots as possible.Please confirm that you have read the #8 https://github.com/haozi/New-Bing-Anywhere/issues/8.The UA may not necessarily reflect your actual browser and platform, so please make sure to indicate them clearly.";R&&(i="\u8BF7\u5728\u6B64\u884C\u4E0A\u65B9\u53D1\u8868\u60A8\u7684\u8BA8\u8BBA\u3002\u8BF7\u786E\u8BA4\u5DF2\u7ECF\u9605\u8BFB\u4E86FAQ(https://github.com/haozi/New-Bing-Anywhere/issues/8)\uFF0C\u8BE6\u5C3D\u7684\u63CF\u8FF0\u548C\u622A\u56FE\u6709\u52A9\u4E8E\u6211\u4EEC\u5B9A\u4F4D\u95EE\u9898\uFF0C\u63CF\u8FF0\u4E0D\u6E05\u7684\u95EE\u9898\u4F1A\u88AB\u5173\u95ED\uFF0CUA \u4E0D\u4E00\u5B9A\u771F\u5B9E\u53CD\u6620\u60A8\u7684\u6D4F\u89C8\u5668\u548C\u5E73\u53F0\uFF0C\u8BF7\u5907\u6CE8\u6E05\u695A");let s=` 



<!--  ${i} -->
<pre>
`+Object.entries({Version:`${p}${w?" (Canary)":""} `,UA:navigator.userAgent,Lang:chrome.i18n.getUILanguage(),AcceptLangs:(await chrome.i18n.getAcceptLanguages()).join(", "),config:JSON.stringify(n),...e}).map(([g,m])=>m?`${g}: ${m}`:"").join(`
`)+"</pre>";return o+=encodeURIComponent(s.slice(0,2e3)),o}catch{return t}},l=(e="",t)=>{try{return new URL(e,t)}catch{return{searchParams:{get:()=>null}}}},A=e=>{try{return new URLSearchParams(e)}catch{return{get:()=>null}}},a=async e=>{let t=await chrome.tabs.query({currentWindow:!0}),n=l(e),r=t.find(o=>o.url?.startsWith(n.origin));return r==null?r=await chrome.tabs.create({url:e}):await Promise.all([chrome.tabs.move(r.id,{index:t.length-1}),r.url!==e&&chrome.tabs.update(r.id,{url:e}),chrome.tabs.update(r.id,{active:!0,url:r.url!==e?e:void 0})].filter(Boolean)),r};var f={openChat:{title:"\u{1F4AC} New Bing",contexts:["action"],onclick:e=>{a("https://www.bing.com/search?q=Bing+AI&showconv=1")}},openImageCreate:{title:"\u{1F5BC}\uFE0F New Bing Image Creator",contexts:["action"],onclick:e=>{a("https://www.bing.com/create")}},likeIt:{title:"\u2764\uFE0F Like it",contexts:["action"],onclick:()=>{a("https://chrome.google.com/webstore/detail/new-bing-anywhere-bing-ch/hceobhjokpdbogjkplmfjeomkeckkngi/reviews")}},reportIssues:{title:R?"\u{1F41B} \u53CD\u9988\u5EFA\u8BAE":"\u{1F41B} Report issues",contexts:["action"],onclick:async e=>{let t=await _();a(t)}}};var U=()=>{chrome.contextMenus.removeAll(()=>{for(let[e,t]of Object.entries(f))chrome.contextMenus.create({id:e,title:t.title,contexts:t.contexts})}),chrome.contextMenus.onClicked.addListener((e,t)=>{let{menuItemId:n}=e,r=f[n];r?.onclick&&r.onclick(e,t)})};var u="notification",y="notification:hide",W=async()=>{let e;try{e=await fetch("https://api.github.com/repos/haozi/New-Bing-Anywhere/issues/24").then(async t=>await t.json())}catch{}return e},S=async()=>{let{[u]:e}=await chrome.storage.local.get(u);if(!e||e.lastModify&&Date.now()-e.lastModify>36e5){await chrome.storage.local.remove(u);let r=await W();r&&await chrome.storage.local.set({[u]:{data:r,lastModify:Date.now()}})}let{[y]:t,[u]:n}=await chrome.storage.local.get([y,u]);return!n?.data||!(n.data.title&&n.data.state==="open")||t===1&&n.data.title===e.data?.title?null:(await chrome.storage.local.remove(y),n.data)},O=async()=>{chrome.storage.local.set({[y]:1})};var H=async()=>({version:p}),Y=async({url:e}={})=>{let t=await chrome.tabs.query({currentWindow:!0}),n=l(e),r=t.find(q=>q.url?.startsWith(n.origin));r==null?r=await chrome.tabs.create({url:e}):r.id!=null&&await Promise.all([chrome.tabs.move(r.id,{index:t.length-1}),chrome.tabs.update(r.id,{active:!0})]);let o=e,i="",s="",g=n.hostname==="www.google.com",m=n.hostname==="www.bing.com";g?(i=n.searchParams.get("q")??"",s=l(r.url).searchParams.get("q")??"",l(r.url).searchParams.get("q")):m&&(i=n.searchParams.get("q")??"",s=l(r.url).searchParams.get("q")??""),i=i.trim(),s=s.trim(),!(i&&i===s)&&(g?o=`${n.origin}${n.pathname}?q=${encodeURIComponent(i)}`:m&&(o=`${n.origin}${n.pathname}?q=${encodeURIComponent(i)}`),await chrome.tabs.update(r.id,{url:o}))},k={getEnv:H,openUrlInSameTab:Y,getNotification:S,hideNotification:O};var b=async(e,t={})=>await chrome.cookies.set({domain:t.domain,storeId:t.storeId,path:t.path,httpOnly:t.httpOnly,secure:t.secure,sameSite:t.sameSite,expirationDate:t.expirationDate,...e});var D=()=>{U(),E(k),chrome.runtime.onInstalled.addListener(async e=>{let t=await C(),n=h.url;if(w){a(`${n}/tree/canary`);return}e.reason==="install"?a(n):e.reason==="update"&&t.showRelease&&a(`${n}/releases/tag/v${p}`)}),chrome.webRequest.onBeforeRequest.addListener(()=>{chrome.cookies.get({name:"_EDGE_S",url:c},e=>{let t=e?.value;if(!t)return;let n=A(t),r=n.get("mkt")?.toLowerCase()??"";N.map(o=>o.toLowerCase()).includes(r)&&(r==="zh-cn"?(n.set("mkt","zh-HK"),n.set("ui","zh-hans")):n.delete("mkt"),b({url:c,name:e.name,value:n.toString()},e))}),chrome.cookies.get({name:"_RwBf",url:c},e=>{let t=e?.value;if(!t){b({url:c,name:"_RwBf",value:"wls=2",domain:".bing.com",httpOnly:!0});return}let n=A(t),r=n.get("wls");r!=="2"&&r!==""&&n.set("wls","2"),b({url:c,name:"_RwBf",domain:".bing.com",httpOnly:!0,value:n.toString()},e)})},{urls:[c+"*"],types:["main_frame"]})};var V={"User-Agent":M()},Q="modifyHeaders",X="set",I=[{priority:2001,action:{type:Q,requestHeaders:Object.entries(V).map(([e,t])=>({operation:X,header:e,value:t}))},condition:{requestDomains:["bing.com","www.bing.com","cn.bing.com"],resourceTypes:B}}].filter(Boolean).map((e,t)=>({id:t+1+2e3,...e})),$=()=>{I.length&&chrome.declarativeNetRequest.getDynamicRules(e=>{chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds:[...new Set([...I.map(t=>t.id),...e.map(t=>t.id)])],addRules:I})})};D();chrome.runtime.onInstalled.addListener(e=>{$()});chrome.runtime.setUninstallURL("https://github.com/haozi/New-Bing-Anywhere/blob/main/uninstall.md");})();
