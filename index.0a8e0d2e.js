!function(){var e={headers:{"x-api-key":"live_mSgF2dZzulwDyx0bMv0cLnJQWegZHuonqVCFywHZsYw1IrLHCVSB6P5cqU2Napge"}},t=document.querySelector(".breed-select"),n=document.querySelector(".cat-info"),i=document.querySelector(".loader"),r=document.querySelector(".error");r.hidden=!0,fetch("https://api.thecatapi.com/v1/breeds",e).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){t.innerHTML=e.map((function(e){return'<option value="'.concat(e.id,'">').concat(e.name,"</option>")})).join("")})).catch((function(){return r.removeAttribute("hidden")})).finally((function(){return i.setAttribute("hidden",!0)})),t.addEventListener("change",(function(t){n.style.visibility="hidden",i.removeAttribute("hidden"),(c=t.target.value,fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(c),e).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((function(e){var i=e.map((function(e){return'<img src="'.concat(e.url,'" alt="cat" width="400" height="400">')})).join("");n.innerHTML=i,e.map((function(e){e.breeds.forEach((function(e){var i=[e].find((function(e){return e.id==="".concat(t.target.value)})),r='<div class="cat-container">\n                    <h2>'.concat(i.name,"</h2>\n                    <p>").concat(i.description,"</p>\n                    <h2>Temperament</h2>\n                    <p>").concat(i.temperament,"</p>\n                    </div>");n.insertAdjacentHTML("beforeend",r),n.style.visibility="visible"}))}))})).catch((function(){r.removeAttribute("hidden")})).finally((function(){return i.setAttribute("hidden",!0)}));var c}))}();
//# sourceMappingURL=index.0a8e0d2e.js.map