import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const selectCat = document.querySelector(".breed-select");
const infoCat = document.querySelector(".cat-info");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");

error.style.visibility = "hidden";


fetchBreeds()
    .then(data => {
        selectCat.innerHTML = data.map(elem => `<option value="${elem.id}">${elem.name}</option>`).join("");
        error.style.visibility = "hidden";
    })
    .catch(() => error.removeAttribute("hidden"))
    .finally(() => loader.setAttribute("hidden", true))

selectCat.addEventListener("change", heandlerChange);

function heandlerChange(evt) {
    infoCat.style.visibility = "hidden"
    //loader.style.visibility = "visible"
    loader.removeAttribute("hidden")
    //error.style.visibility = "visible"
    fetchCatByBreed(evt.target.value)
        .then(data => {
            const img = data.map(elem => `<img src="${elem.url}" alt="cat" width="400" height="400">`).join("");
            infoCat.innerHTML = img;
            data.map(elem => {
                elem.breeds.forEach(cat => {
                    const array = [cat];
                    const findCatById = array.find(option => option.id === `${evt.target.value}`);
                    const markup = `<div class="cat-container">
                    <h2>${findCatById.name}</h2>
                    <p>${findCatById.description}</p>
                    <h2>Temperament</h2>
                    <p>${findCatById.temperament}</p>
                    </div>`
                    infoCat.insertAdjacentHTML("beforeend", markup)
                    infoCat.style.visibility = "visible"
                })
            })
        })
        .catch(() => {
            //error.removeAttribute("hidden")
            error.style.visibility = "visible"
            
        })
        .finally(() => loader.setAttribute("hidden", true));
}

