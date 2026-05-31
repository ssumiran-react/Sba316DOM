const tableScore = document.getElementById("tableScore");
const frag = document.createDocumentFragment();

let tCount = 12;
let numOfTCount = [];


let headerTeamScoreboard;
let awayTeamScoreboard;
let homeTeamScoreboard;
let awayTeamData;
let homeTeamData;

let scoreboard;
let headRow;
let awayRow;
let homeRow;

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

const ADMIN = [
    {
        "user": "admin",
        "role": "admin",
        "password": "adm"
    }
]




firstLoad();
function firstLoad() { //console.log(ADMIN[0].user);
    localStorage.setItem(ADMIN[0].user, JSON.stringify(ADMIN[0]));
    initialGameTable();
    addAdminPanel();
}


//startGame.addEventListener("click", startGameTable);


function initialGameTable() {
    let j = 0;
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    while (j < 3) {
        const tr = document.createElement("tr");

        for (let i = -1; i <= tCount; i++) {
            if (j == 0) {
                const th = document.createElement("th");

                if (i == -1) { th.textContent = "logo"; th.setAttribute("name", "logo"); }
                if (i == 0) { th.textContent = "Team"; th.setAttribute("name", "team"); }
                if (i >= 1 && i <= 9) { th.textContent = i; th.setAttribute("name", "inn"); }
                if (i == 10) { th.textContent = "R"; th.setAttribute("name", "r"); }
                if (i == 11) { th.textContent = "H"; th.setAttribute("name", "h"); }
                if (i == 12) { th.textContent = "E"; th.setAttribute("name", "e"); }

                tr.appendChild(th);
                thead.appendChild(tr);
            } else {
                const td = document.createElement("td");

                if (j == 1) {
                    tr.setAttribute("name", "awayTeam");
                    if (i == -1) { td.textContent = "logo"; td.setAttribute("name", "logo");  td.classList.add("awayTeam"); }
                    if (i == 0) { td.textContent = "AwayTeam"; td.setAttribute("name", "awayName");  td.classList.add("awayTeam"); }
                } else {
                    tr.setAttribute("name", "homeTeam");
                    if (i == -1) { td.textContent = "logo"; td.setAttribute("name", "logo");  td.classList.add("homeTeam"); }
                    if (i == 0) { td.textContent = "HomeTeam"; td.setAttribute("name", "homeName");  td.classList.add("homeTeam"); }
                }
                if (i >= 1 && i <= 9) { td.textContent = "0"; td.setAttribute("name", "inn"); td.classList.add("inn"); }
                if (i == 10) { td.textContent = "0"; td.setAttribute("name", "r"); td.classList.add("r"); }
                if (i == 11) { td.textContent = "0"; td.setAttribute("name", "h"); td.classList.add("h"); }
                if (i == 12) { td.textContent = "0"; td.setAttribute("name", "e"); td.classList.add("e"); }

                tr.appendChild(td);
                tbody.appendChild(tr);
            }
        }
        j++;
    }

    // tbody.addEventListener("mouseover", ()=>{
    //                 //if (Number(td.textContent) > 0){
    //                     tbody.classList.toggle("highlight");
    //                // }
    //             })

    tableScore.appendChild(thead);
    tableScore.appendChild(tbody);
}

function addExtraInning() {
    const lastInn = headRow.cells[headRow.cells.length - 4];
    const columAt = headRow.cells.length - 2;

    const headTh = document.createElement("th");
    headTh.textContent = Number(lastInn.textContent) + 1;
    headTh.setAttribute("name", "inn");
    headRow.insertBefore(headTh, headRow.cells[headRow.cells.length - 3]);

    const awayTh = document.createElement("td");
    awayTh.textContent = "0";
    awayTh.classList.add("inn");
    awayTh.setAttribute("name", "inn");
    awayRow.insertBefore(awayTh, awayRow.cells[awayRow.cells.length - 3]);

    const homeTh = document.createElement("td");
    homeTh.textContent = "0";
    homeTh.classList.add("inn");
    homeTh.setAttribute("name", "inn");
    homeRow.insertBefore(homeTh, homeRow.cells[homeRow.cells.length - 3]);
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

        //Getting Scoreboard Elements
        scoreboard = tableScore.querySelectorAll("tr");
        headRow = scoreboard[0];
        awayRow = scoreboard[1];
        homeRow = scoreboard[2];

        //console.log (awayRow.cells);
        awayRow.addEventListener("change", (e) => {
            if (event.target !== "NaN") {

                if (event.target.classList.contains("inn") && Number(e.target.textContent) >= 0) {
                    //td.classList.toggle("highlight");
                    e.target.classList.add("inning");
                    //e.target.style.color = "red";
                    // setTimeout(() => {
                    //     td.classList.toggle("innings");
                    // }, 3000);
                }
                if (event.target.classList.contains("r") && Number(e.target.textContent) >= 0) {
                    
                }
                if (event.target.classList.contains("h") && Number(e.target.textContent) >= 0) {
                    e.target.style.color = "orange";
                }
                if (event.target.classList.contains("e") && Number(e.target.textContent) >= 0) {
                    e.target.style.color = "red";
                }
                e.target.style.font.weight = "bold";
            }
            //console.log(e.target.getAttribute("R"));
        });

        homeRow.addEventListener("change", (e) => {
            if (event.target !== "NaN") {

                if (event.target.classList.contains("inn") && Number(e.target.textContent) >= 0) {
                    //td.classList.toggle("highlight");
                    e.target.classList.add("inning");
                    //e.target.style.color = "red";
                    // setTimeout(() => {
                    //     td.classList.toggle("innings");
                    // }, 3000);
                }
                if (event.target.classList.contains("r") && Number(e.target.textContent) >= 0) {
                    
                }
                if (event.target.classList.contains("h") && Number(e.target.textContent) >= 0) {
                    e.target.style.color = "orange";
                }
                if (event.target.classList.contains("e") && Number(e.target.textContent) >= 0) {
                    e.target.style.color = "red";
                }
                e.target.style.font.weight = "bold";
            }
            //console.log(e.target.getAttribute("R"));
        });


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
            if (team) {
                const opt = document.createElement("option");
                opt.value = String(team.away);
                opt.textContent = String(team.name);
                gameSetAwaySelect.appendChild(opt);
            }
        });

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
            if (team) {
                const opt = document.createElement("option");
                opt.value = String(team.away);
                opt.textContent = String(team.name);
                gameSetHomeSelect.appendChild(opt);
            }
        });

        gameSetHomeDiv.appendChild(gameSetHomeText);
        gameSetHomeDiv.appendChild(gameSetHomeSelect);

        //Start Game and End Game buttons
        const gameBtnDiv = document.createElement("div");
        const gameStartBtn = document.createElement("button");
        const gameEndBtn = document.createElement("button");
        gameEndBtn.disabled = true;

        gameStartBtn.textContent = "Start Game";
        gameStartBtn.addEventListener("click", () => {
            gameEndBtn.disabled = false;
            gameStartBtn.disabled = true;

            //Putting Away and Home Teams information
            awayTeamData = TEAMS_DATA[gameSetAwaySelect.selectedIndex - 1]
            awayRow.cells[0].textContent = awayTeamData.logo;
            awayRow.cells[1].textContent = awayTeamData.name;

            homeTeamData = TEAMS_DATA[gameSetHomeSelect.selectedIndex - 1]
            homeRow.cells[0].textContent = homeTeamData.logo;
            homeRow.cells[1].textContent = homeTeamData.name;

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

        ////////////////////////////////////////////////////////////////////////////////////
        //Scoring Div 
        const scoreDiv = document.createElement("div");
        const scoreSetDiv = document.createElement("div");
        const addInnDiv = document.createElement("div");





        const addInnBtn = document.createElement("button");
        addInnBtn.textContent = "Add Inning";

        addInnBtn.addEventListener("click", addExtraInning);

        addInnDiv.appendChild(addInnBtn);
        scoreDiv.appendChild(scoreSetDiv);
        scoreDiv.appendChild(addInnDiv);
        ///////////////////////////////////////////////////////////////////////////////////

        panelDiv.appendChild(gameDiv);
        panelDiv.appendChild(scoreDiv);
        adminDiv.appendChild(h1);
        adminDiv.appendChild(panelDiv);
        frag.appendChild(adminDiv);
        document.body.appendChild(frag);

    } catch (err) {
        window.alert("Error creating Admin Panel in: " + err.message);
    }
}


/*
Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).

Iterate over a collection of elements to accomplish some task.
Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.



Include at least one form and/or input with HTML attribute validation.
Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)

Done

Cache at least one element using querySelector or querySelectorAll.
Use at least two Browser Object Model (BOM) properties or methods.
Cache at least one element using selectElementById.
Register at least two different event listeners and create the associated event handler functions.
Create at least one element using createElement.
Use appendChild and/or prepend to add new elements to the DOM.
Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. 
Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
Modify at least one attribute of an element in response to user interaction.
*/