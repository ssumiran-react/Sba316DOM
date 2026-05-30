const tableScore = document.getElementById("tableScore");
let tCount = 12;
let numOfTCount = [];
let extraInn = false;

firstLoad();

function firstLoad() {
    createTableElements(extraInn);
}

function createTableElements(extraInn) {

    if (!extraInn) {
        let j = 0;
        while (j < 3) {
            const tr = document.createElement("tr");
            for (let i = -1; i <= tCount; i++) {
                

                if (j == 0) {
                    const th = document.createElement("th");

                    if (i == -1) th.textContent = "logo";
                    if (i == 0) th.textContent = "Team";
                    if (i > 0 && i < 10) th.textContent = i;
                    if (i == 10) th.textContent = "R";
                    if (i == 11) th.textContent = "H";
                    if (i == 12) th.textContent = "E";
                    tr.appendChild(th);
                } else {
                    const td = document.createElement("td");

                    if (j == 1) {
                        tr.setAttribute("name","awayTeam");
                        if (i == -1) {td.textContent = "logo";  td.setAttribute("name","logo");}
                        if (i == 0) {td.textContent = "AwayTeam"; td.setAttribute("name","awayName");}
                    } else {
                        tr.setAttribute("name","homeTeam");
                        if (i == -1) {td.textContent = "logo"; td.setAttribute("name","logo");}
                        if (i == 0) {td.textContent = "HomeTeam"; td.setAttribute("name","homeName");}
                    }
                    if (i > 0 && i < 10) td.textContent = "0";
                    if (i == 10) {td.textContent = "0";  td.setAttribute("name","R");}
                    if (i == 11) {td.textContent = "0";  td.setAttribute("name","H");}
                    if (i == 12) {td.textContent = "0";  td.setAttribute("name","E");}
                    tr.appendChild(td);
                }


                tableScore.appendChild(tr);
            }
            j++;
        }
    } else {

    }

}
/*

Cache at least one element using querySelector or querySelectorAll.
Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).

Iterate over a collection of elements to accomplish some task.
Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. 
Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.

Modify at least one attribute of an element in response to user interaction.
Register at least two different event listeners and create the associated event handler functions.
Use at least two Browser Object Model (BOM) properties or methods.
Include at least one form and/or input with HTML attribute validation.
Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)

Doen
Cache at least one element using selectElementById.

Create at least one element using createElement.
Use appendChild and/or prepend to add new elements to the DOM.
*/