import {data} from './data.js';
const itemContainer = document.getElementById("itemContainer")





const createBlock = (item) => {
    const barDiv = document.createElement("div");
    const itemDiv = document.createElement("div")

    barDiv.innerHTML=`<div class="bar1">
    <span>${item.amount}%</span>
    <div class="items3" style="height:${item.height}px; background:${item.color}"></div>
    <p>${item.day}</p>
    </div>`
    // const itemDiv = document.createElement("div")
    // const pText = document.createElement("p")

    // barDiv.style.height = item.height
    // barDiv.style.color = item.color
    // pText.innerText = item.day

    itemContainer.appendChild(barDiv)



}


data.forEach(element => {
    console.log(element)
    createBlock(element)
});
