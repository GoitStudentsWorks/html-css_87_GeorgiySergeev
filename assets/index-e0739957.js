(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(t){if(t.ep)return;t.ep=!0;const c=s(t);fetch(t.href,c)}})();const a=document.querySelector(".go-top");window.addEventListener("scroll",f);a.addEventListener("click",d);function f(){const e=window.pageYOffset,o=document.documentElement.clientHeight;e>o?a.classList.add("go-top--show"):a.classList.remove("go-top--show")}function d(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(d,0))}(()=>{const e=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-menu]");e.addEventListener("click",()=>{const s=e.getAttribute("aria-expanded")==="true"||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!s),o.classList.toggle("is-open")})})();var v=document.querySelectorAll(".js-open-modal"),i=document.querySelector(".js-overlay-modal"),y=document.querySelectorAll(".js-modal-close");v.forEach(function(e){e.addEventListener("click",function(o){o.preventDefault();var s=this.getAttribute("data-modal"),n=document.querySelector('.modal[data-modal="'+s+'"]');n.classList.add("active"),i.classList.add("active")})});y.forEach(function(e){e.addEventListener("click",function(o){var s=this.closest(".modal");s.classList.remove("active"),i.classList.remove("active")})});document.body.addEventListener("keyup",function(e){var o=e.keyCode;o==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1);i.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")});const r="active",u=document.querySelector(".modal-thank-you"),p=document.querySelector(".thank-form"),m=document.querySelector(".overlay");document.querySelector(".contacts-button");const L=document.querySelectorAll(".close-btn"),g=()=>{u.classList.add(r),m.classList.add(r)},S=()=>{u.classList.remove(r),m.classList.remove(r)};L.forEach(e=>{e.addEventListener("click",o=>{o.stopPropagation(),S()})});p.addEventListener("submit",e=>{e.preventDefault(),setTimeout(g,300)});
