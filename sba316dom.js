const tableScore = document.getElementById("tableScore");
const frag = document.createDocumentFragment();


let tCount = 12;
let numOfTCount = [];
let extraInn = false;

const TEAMS_DATA = [
    {
        "logo": "P",
        "name": "Philies",
        "location": "Philadelphia, PA",
        "away": "29-28",
        "home": "34-22"
    },
    {
        "logo": "LA",
        "name": "Dodgers",
        "location": "Los Angeles, CA",
        "away": "20-33",
        "home": "37-20"
    }
]


firstLoad();
function firstLoad() {
    initialGameTable();
    addAdminPanel();
}


//startGame.addEventListener("click", startGameTable);


function initialGameTable() {
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
                    tr.setAttribute("name", "awayTeam");
                    if (i == -1) { td.textContent = "logo"; td.setAttribute("name", "logo"); }
                    if (i == 0) { td.textContent = "AwayTeam"; td.setAttribute("name", "awayName"); }
                } else {
                    tr.setAttribute("name", "homeTeam");
                    if (i == -1) { td.textContent = "logo"; td.setAttribute("name", "logo"); }
                    if (i == 0) { td.textContent = "HomeTeam"; td.setAttribute("name", "homeName"); }
                }
                if (i > 0 && i < 10) td.textContent = "0";
                if (i == 10) { td.textContent = "0"; td.setAttribute("name", "R"); }
                if (i == 11) { td.textContent = "0"; td.setAttribute("name", "H"); }
                if (i == 12) { td.textContent = "0"; td.setAttribute("name", "E"); }

                tr.appendChild(td);
            }

            tableScore.appendChild(tr);
        }
        j++;
    }


}

function addInning() {

}



function addAdminPanel() {
    try {
        const adminDiv = document.createElement("div");
        adminDiv.setAttribute("id", "admin");
        const h1 = document.createElement("h1");
        h1.textContent = "Admin Panel";

        const panelDiv = document.createElement("div");

        const gameDiv = document.createElement("div");

        //Selecting Away Team and Home Team
        const gameSetDiv = document.createElement("div");
        const gameSetAwayDiv = document.createElement("div");
        const gameSetHomeDiv = document.createElement("div");

        // Validate Team data to select
        if (!Array.isArray(TEAMS_DATA)) {
            throw new Error("Team data must be an array.");
        }

        //Selecting Away Team
        const gameSetAwayText = document.createElement("text");
        gameSetAwayText.textContent = "Away Team:  ";
        const gameSetAwaySelect = document.createElement("select");
        gameSetAwaySelect.setAttribute("id", "awayTeamSelect"); 
        
        const optAwayPH = document.createElement("option");
        optAwayPH.textContent = "Select away team";
        optAwayPH.value = "";
        optAwayPH.disabled = true;
        optAwayPH.selected = true;
        gameSetAwaySelect.appendChild(optAwayPH);

        TEAMS_DATA.forEach(team => {
        if (team){
            const opt = document.createElement("option");
            opt.value = String(team.away);
            opt.textContent = String(team.name);
            gameSetAwaySelect.appendChild(opt);
        }});

        gameSetAwayDiv.appendChild(gameSetAwayText);
        gameSetAwayDiv.appendChild(gameSetAwaySelect);

        //Selecting Home Team
        const gameSetHomeText = document.createElement("text");
        gameSetHomeText.textContent = "Home Team:  ";
        const gameSetHomeSelect = document.createElement("select");
        gameSetHomeSelect.setAttribute("id", "homeTeamSelect"); 
        
        const optHomePH = document.createElement("option");
        optHomePH.textContent = "Select home team";
        optHomePH.value = "";
        optHomePH.disabled = true;
        optHomePH.selected = true;
        gameSetHomeSelect.appendChild(optHomePH);

        TEAMS_DATA.forEach(team => {
        if (team){
            const opt = document.createElement("option");
            opt.value = String(team.away);
            opt.textContent = String(team.name);
            gameSetHomeSelect.appendChild(opt);
        }});

        gameSetHomeDiv.appendChild(gameSetHomeText);
        gameSetHomeDiv.appendChild(gameSetHomeSelect);

        //Start Game and End Game buttons
        const gameBtnDiv = document.createElement("div");
        const gameStartBtn = document.createElement("button");
        const gameEndBtn = document.createElement("button");
        gameEndBtn.disabled = true;

        gameStartBtn.textContent = "Start Game";
        gameStartBtn.addEventListener("click", () => {
            console.log("game st");
            gameEndBtn.disabled = false;
            gameStartBtn.disabled = true;

        });

        gameEndBtn.textContent = "End Game";
        gameEndBtn.addEventListener("click", () => {
            console.log("game end");
            gameStartBtn.disabled = false;
            gameEndBtn.disabled = true;
        });




        gameSetDiv.appendChild(gameSetAwayDiv);
        gameSetDiv.appendChild(gameSetHomeDiv);

        gameBtnDiv.appendChild(gameStartBtn);
        gameBtnDiv.appendChild(gameEndBtn);
        gameDiv.appendChild(gameSetDiv);
        gameDiv.appendChild(gameBtnDiv);
        panelDiv.appendChild(gameDiv);
        adminDiv.appendChild(h1);
        adminDiv.appendChild(panelDiv);
        frag.appendChild(adminDiv);
        document.body.appendChild(frag);

    } catch (err) {
        window.alert("Error creating Admin Panel in: " + err.message);
    }
}


/*

Cache at least one element using querySelector or querySelectorAll.
Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).

Iterate over a collection of elements to accomplish some task.
Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.

Register at least two different event listeners and create the associated event handler functions.
Use at least two Browser Object Model (BOM) properties or methods.
Include at least one form and/or input with HTML attribute validation.
Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)

Doen
Cache at least one element using selectElementById.

Create at least one element using createElement.
Use appendChild and/or prepend to add new elements to the DOM.
Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. 
Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
Modify at least one attribute of an element in response to user interaction.
*/