(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();(()=>{const t=document.querySelector("[data-menu-button]"),r=document.querySelector("[data-menu]");t.addEventListener("click",()=>{const n=t.getAttribute("aria-expanded")==="true"||!1;t.classList.toggle("is-open"),t.setAttribute("aria-expanded",!n),r.classList.toggle("is-open")})})();var i=document.querySelectorAll(".js-open-modal"),a=document.querySelector(".js-overlay-modal"),l=document.querySelectorAll(".js-modal-close");i.forEach(function(t){t.addEventListener("click",function(r){r.preventDefault();var n=this.getAttribute("data-modal"),c=document.querySelector('.modal[data-modal="'+n+'"]');c.classList.add("active"),a.classList.add("active")})});l.forEach(function(t){t.addEventListener("click",function(r){var n=this.closest(".modal");n.classList.remove("active"),a.classList.remove("active")})});document.body.addEventListener("keyup",function(t){var r=t.keyCode;r==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1);a.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")});