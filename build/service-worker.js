"use strict";var precacheConfig=[["/ux-supercharge/index.html","a0cf7d70a9ffe76ab069b17977a75081"],["/ux-supercharge/static/css/main.b77d3273.css","a4b6a0a2ed6e7f9f5328079e1cd55117"],["/ux-supercharge/static/js/main.f333bf25.js","c0e7ce8fbad723b1334ce1be14aeb99a"],["/ux-supercharge/static/media/cityscape.8f80d5a7.png","8f80d5a7724c84510a5b20c7e8365460"],["/ux-supercharge/static/media/design_challenge_illustration.c293617f.png","c293617f6de79329db651404ae026fd9"],["/ux-supercharge/static/media/expert_feedback.44513733.png","44513733e630a62887a91529b275bc80"],["/ux-supercharge/static/media/item_design_challenge.976deec8.png","976deec81fe4146ff672c08b33794a36"],["/ux-supercharge/static/media/item_device_mockup.127268b4.png","127268b4f93b2074c748a6829ba8e025"],["/ux-supercharge/static/media/item_feedback.e5e60a63.png","e5e60a63499d79aa1208c32ec0c68281"],["/ux-supercharge/static/media/item_interview_video.12836ddc.png","12836ddcaa8df22ac98f71fa4cc1b4dd"],["/ux-supercharge/static/media/item_market_data.9f01ee9d.png","9f01ee9da170ebb1602cc232c5f3c2dd"],["/ux-supercharge/static/media/item_persona_template.919df695.png","919df6951190880d29d509309211a935"],["/ux-supercharge/static/media/item_step_by_step_ux_process.42b7accd.png","42b7accd0388271fd2dceb832cca3945"],["/ux-supercharge/static/media/item_storyboard.8de61102.png","8de61102097f65eca6ad155e633572da"],["/ux-supercharge/static/media/item_survey.feb7a97e.png","feb7a97e90ed0cdbcd87526b0f52bd71"],["/ux-supercharge/static/media/quote-profile.1af3f76d.png","1af3f76df9b2ca047f0e0c816e0ac58c"],["/ux-supercharge/static/media/thank-you-animation.f3323743.gif","f3323743e2ca64a8fd466b215d75af73"],["/ux-supercharge/static/media/user_research_market_data.6a8b5832.png","6a8b5832338999414644a41943d2b26d"],["/ux-supercharge/static/media/ux_case_studies_employers.b4a60d76.png","b4a60d76997924e43653d87abcaa4106"],["/ux-supercharge/static/media/ux_case_studies_take_weeks.3a543719.png","3a543719178df3f8a953dbda7762d6f7"],["/ux-supercharge/static/media/ux_design_challenge_kit_illustration.92e0b9e2.png","92e0b9e244987842b1563885ab63d0f5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var n="/ux-supercharge/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});