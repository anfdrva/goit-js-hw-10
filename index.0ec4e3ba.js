const e={headers:{"x-api-key":"live_mSgF2dZzulwDyx0bMv0cLnJQWegZHuonqVCFywHZsYw1IrLHCVSB6P5cqU2Napge"}},t=document.querySelector(".breed-select"),n=document.querySelector(".cat-info"),i=document.querySelector(".loader"),r=document.querySelector(".error");r.hidden=!0,fetch("https://api.thecatapi.com/v1/breeds",e).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{t.innerHTML=e.map((e=>`<option value="${e.id}">${e.name}</option>`)).join("")})).catch((()=>r.removeAttribute("hidden"))).finally((()=>i.setAttribute("hidden",!0))),t.addEventListener("change",(function(t){n.style.visibility="hidden",i.removeAttribute("hidden"),(a=t.target.value,fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${a}`,e).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((e=>{const i=e.map((e=>`<img src="${e.url}" alt="cat" width="400" height="400">`)).join("");n.innerHTML=i,e.map((e=>{e.breeds.forEach((e=>{const i=[e].find((e=>e.id===`${t.target.value}`)),r=`<div class="cat-container">\n                    <h2>${i.name}</h2>\n                    <p>${i.description}</p>\n                    <h2>Temperament</h2>\n                    <p>${i.temperament}</p>\n                    </div>`;n.insertAdjacentHTML("beforeend",r),n.style.visibility="visible"}))}))})).catch((()=>{r.removeAttribute("hidden")})).finally((()=>i.setAttribute("hidden",!0)));var a}));
//# sourceMappingURL=index.0ec4e3ba.js.map