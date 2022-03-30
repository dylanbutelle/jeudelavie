let game = document.getElementById("game").getElementsByTagName("table")[0];
let startMenu = document.getElementsByClassName("start")[0];
let NBR_LIGNES = document.getElementById("row");
let NBR_COLONNES = document.getElementById("cols");
let tab = new Array(NBR_LIGNES.value);

function createTab() {
  startMenu.style.display = "none";
  for (let i = 0; i < NBR_LIGNES.value; i++) {
    const createTr = document.createElement("tr");
    tab[i] = new Array(NBR_COLONNES.value);
    for (let j = 0; j < NBR_COLONNES.value; j++) {
      tab[i][j] = getRandomInt(2);
      const createTd = document.createElement("td");
      // const createP = document.createElement("p");
      // createP.innerText = i + "," + j;
      // createTd.appendChild(createP);
      createTr.appendChild(createTd);
    }
    game.appendChild(createTr);
  }
}

function generatePoints() {
  for (let i = 0; i < NBR_LIGNES.value; i++) {
    const getTr = document.getElementsByTagName("tr");
    for (let j = 0; j < NBR_COLONNES.value; j++) {
      const getTd = getTr[i].getElementsByTagName("td");
      tab[i][j] === 1
        ? (getTd[j].style.backgroundColor = "white")
        : (getTd[j].style.backgroundColor = "black");
    }
  }
}
function nbrNeighbor(i, j) {
  let nbrNeighbor = 0;
  if (
    i - 1 > 0 &&
    j - 1 > 0 &&
    i + 1 < NBR_LIGNES.value &&
    j + 1 < NBR_COLONNES.value
  ) {
    if (tab[i - 1][j - 1] === 0) {
      nbrNeighbor++;
    }
    if (tab[i - 1][j] === 0) {
      nbrNeighbor++;
    }
    if (tab[i - 1][j + 1] === 0) {
      nbrNeighbor++;
    }
    if (tab[i][j + 1] === 0) {
      nbrNeighbor++;
    }
    if (tab[i + 1][j + 1] === 0) {
      nbrNeighbor++;
    }
    if (tab[i + 1][j] === 0) {
      nbrNeighbor++;
    }
    if (tab[i + 1][j - 1] === 0) {
      nbrNeighbor++;
    }
    if (tab[i][j - 1] === 0) {
      nbrNeighbor++;
    }

    //sens des aiguilles d'une montre
    // console.log(
    //   i,
    //   j,
    //   tab[i][j]
    //   // tab[i - 1][j - 1],
    //   // tab[i - 1][j],
    //   // tab[i - 1][j + 1],
    //   // tab[i][j + 1],
    //   // tab[i + 1][j + 1],
    //   // tab[i + 1][j],
    //   // tab[i + 1][j - 1],
    //   // tab[i][j - 1]
    // );
  }
  return nbrNeighbor;
}

function change() {
  for (let i = 0; i < NBR_LIGNES.value; i++) {
    for (let j = 0; j < NBR_COLONNES.value; j++) {
      if (
        tab[i][j] === 0 &&
        (nbrNeighbor(i, j) === 2 || nbrNeighbor(i, j) === 3)
      ) {
        tab[i][j] = 0;
      } else {
        tab[i][j] = 1;
      }
      if (tab[i][j] === 1 && nbrNeighbor(i, j) === 3) {
        tab[i][j] = 0;
      }
    }
  }
  generatePoints();
}
function play() {
  createTab();
  generatePoints();
  setInterval(change, 500);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
