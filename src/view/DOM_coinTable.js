import { COINS } from "../constants/constants.js";

//동전 개수 표시하는 DOM TD (param: 보유 동전 || 반환 동전, 각 동전의 개수)
export const createCoinTable = (tableClass, coinID, coinCount) => {
    const table = document.querySelector(`.${tableClass}`); 

    COINS.forEach((won, index) => {
        const tr = document.createElement("tr");

        const wonTD = document.createElement("td");
        const countTD = document.createElement("td");

        wonTD.innerHTML = won;
        countTD.innerHTML = coinCount[index];

        countTD.setAttribute("id", coinID[index]);
        
        tr.appendChild(wonTD, countTD);
        table.appendChild(tr);
    });
}