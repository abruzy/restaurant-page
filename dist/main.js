!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i=()=>{const e=document.createElement("nav"),t=(e=>{const t=document.createElement("a");t.setAttribute("class","brand"),t.innerHTML=e;const n=document.createElement("img");return n.setAttribute("src","../img/cooking.svg"),n.setAttribute("alt","logo"),t.appendChild(n),t})("Abruzy"),n=(()=>{const e=document.createElement("ul");e.setAttribute("class","mid-links");const t=document.createElement("li"),n=document.createElement("a");n.setAttribute("id","home"),n.setAttribute("class","nav-item active"),n.innerText="Home";const i=document.createElement("a");i.setAttribute("id","recipe"),i.setAttribute("class","nav-item"),i.innerText="Recipes";const r=document.createElement("a");r.setAttribute("id","about"),r.setAttribute("class","nav-item"),r.innerText="About";const o=document.createElement("a");return o.setAttribute("id","contact"),o.setAttribute("class","nav-item"),o.innerText="Contact",t.appendChild(n),t.appendChild(i),t.appendChild(r),t.appendChild(o),e.appendChild(t),e})(),i=(e=>{const t=document.createElement("button");return t.setAttribute("class","book-meal"),t.innerHTML=e,t})("Book a Meal");return e.appendChild(t),e.appendChild(n),e.appendChild(i),e};var r=()=>{const e=document.createElement("div");e.setAttribute("class","container");const t=(e=>{const t=document.createElement("h1");return t.innerHTML=e,t})("Experience our <br> Best Food !"),n=(e=>{const t=document.createElement("p");return t.innerHTML=e,t})("Anywhere with Free Delivery."),i=(e=>{const t=document.createElement("button");return t.setAttribute("class","order"),t.innerHTML=e,t})("Order Now");return e.appendChild(t),e.appendChild(n),e.appendChild(i),e};const o=document.createElement("ul");o.setAttribute("class","menu-grid");const c=document.createElement("li");o.appendChild(c);const s=document.createElement("div");s.setAttribute("class","menu-box menu-img-1"),c.appendChild(s);const a=document.createElement("div");a.setAttribute("class","menu-info"),s.appendChild(a);const d=document.createElement("li");o.appendChild(d);const u=document.createElement("div");u.setAttribute("class","menu-box menu-img-2"),d.appendChild(u);const l=document.createElement("div");l.setAttribute("class","menu-info"),u.appendChild(l);const m=document.createElement("li");o.appendChild(m);const p=document.createElement("div");p.setAttribute("class","menu-box menu-img-3"),m.appendChild(p);const b=document.createElement("div");b.setAttribute("class","menu-info"),p.appendChild(b);const h=document.createElement("li");o.appendChild(h);const C=document.createElement("div");C.setAttribute("class","menu-box menu-img-4"),h.appendChild(C);const E=document.createElement("div");E.setAttribute("class","menu-info"),C.appendChild(E);const v=e=>{const t=document.createElement("h3");return t.innerHTML=e,t},f=e=>{const t=document.createElement("p");return t.innerHTML=e,t};var A=()=>{const e=document.createElement("div");e.setAttribute("class","recipe-container"),e.appendChild(o);const t=v("Sharwama"),n=f("Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a possimus doloribus ex deserunt necessitatibus optio voluptatibus, autem debitis iusto praesentium.");a.appendChild(t),a.appendChild(n);const i=v("Pizza"),r=f("Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a possimus doloribus ex deserunt necessitatibus optio voluptatibus, autem debitis iusto praesentium.");l.appendChild(i),l.appendChild(r);const c=v("Beans"),s=f("Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a possimus doloribus ex deserunt necessitatibus optio voluptatibus, autem debitis iusto praesentium.");b.appendChild(c),b.appendChild(s);const d=v("Burger"),u=f("Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a possimus doloribus ex deserunt necessitatibus optio voluptatibus, autem debitis iusto praesentium.");return E.appendChild(d),E.appendChild(u),e};var L=()=>{const e=document.createElement("div"),t=(e=>{const t=document.createElement("h2");return t.innerHTML=e,t})("ABOUT US"),n=(e=>{const t=document.createElement("p");return t.setAttribute("class","about"),t.innerHTML=e,t})("Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex natus eaque mollitia? Porro iusto at delectus sapiente, asperiores saepe doloribus voluptatem qui! Expedita sapiente excepturi tempore dolores reprehenderit totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque libero ullam at adipisci obcaecati nesciunt temporibus numquam nostrum, eum unde provident assumenda optio ex distinctio velit sapiente, molestias nemo ratione.");return e.appendChild(t),e.appendChild(n),e};const g=(e,t)=>{const n=document.createElement("tr");return n.appendChild((e=>{const t=document.createElement("th");return t.innerHTML=e,t})(e)),n.appendChild((e=>{const t=document.createElement("td");return t.innerHTML=e,t})(t)),n};var x=()=>{const e=document.createElement("div"),t=(e=>{const t=document.createElement("h2");return t.textContent=e,t})("CONTACT US"),n=(()=>{const e=document.createElement("table");return e.classList.add("contact-table"),e.appendChild(g("EMAIL:","test@test.com")),e.appendChild(g("PHONE:","415.555.2530<br>415.555.9932​")),e.appendChild(g("ADDRESS:","1523 Market St  Suite 100<br>San Francisco, CA 94118")),e})();return e.classList.add("backdrop"),e.appendChild(t),e.appendChild(n),e};const T=document.querySelector("#content");T.appendChild(i()),T.appendChild(r());const M=document.querySelectorAll(".nav-item"),y=document.getElementById("home"),H=document.getElementById("recipe"),O=document.getElementById("about"),S=document.getElementById("contact");M.forEach(e=>{e.addEventListener("click",(function(){M.forEach(e=>e.classList.remove("active")),this.classList.add("active")}))}),y.addEventListener("click",()=>{r()}),H.addEventListener("click",()=>{T.innerHTML="",T.appendChild(i()),T.appendChild(A())}),O.addEventListener("click",()=>{T.innerHTML="",T.appendChild(i()),T.appendChild(L())}),S.addEventListener("click",()=>{T.innerHTML="",T.appendChild(i()),T.appendChild(x())})}]);