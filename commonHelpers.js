import{a as d,P as f}from"./assets/vendor-90405565.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const m="https://app.ticketmaster.com/discovery/v2/",g="uHSLi07StIOlriMPxJGxUbSYsHDs6AFx";async function y(t,s){return(await d.get(`${m}events.json?apikey=${g}&page=${t}&keyword=${s}`)).data}const h={totalItems:0,itemsPerPage:20,visiblePages:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},c=new f("pagination",h),u=c.getCurrentPage();function v(t){c.reset(t)}c.on("afterMove",t=>{const s=t.page;l(s),console.log(s)});const p=document.querySelector(".form");let a="";p.addEventListener("submit",b);function b(t){t.preventDefault(),a=p.elements.searchInput.value.trim(),l(u,a)}const P=document.querySelector(".events-list");function L(t){const s=t.map(({name:o,id:i})=>`
  <li id="${i}">
  <p id="${i}">${o} </p>
  </li>`).join("");P.innerHTML=s}async function l(t,s){try{const o=await y(t,s);o.page.totalElements||alert("Not find"),t===1&&v(o.page.totalElements),L(o._embedded.events)}catch(o){console.error(o)}}l(u,a);
//# sourceMappingURL=commonHelpers.js.map