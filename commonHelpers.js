import{S as n}from"./assets/vendor-4ea312d0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();new n(".category-list-wrap",{loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},slidesPerGroup:1,spaceBetween:30,breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:4}}});
//# sourceMappingURL=commonHelpers.js.map
