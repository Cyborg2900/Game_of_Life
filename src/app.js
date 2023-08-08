const playground = document.getElementById("playground");
const num = 100;
let timerId = null;
let cur_gen = initialzing(num, playground);

// to start the simulation

document.getElementById("start").addEventListener("click", () => {
  console.log("game started");
  clearInterval(timerId);
  timerId = setInterval(gameOfLife, 250);
});

// to stop the simulation
document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timerId);
  console.log("game stopped");
});

console.log("hello world ");

function initialzing(num, playground) {
  console.log("inside initilize");
  playground.innerHTML = null;
  const arr = [];
  for (let i = 0; i < num; i++) {
    const ar = [];
    // creating rows to store the cell in each row
    const row = document.createElement("div");
    row.setAttribute("class", "rows");
    for (let j = 0; j < num; j++) {
      ar.push(false);
      // adding cell to rows
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      const id = String(i) + "," + String(j);
      cell.setAttribute("id", id);
      row.appendChild(cell);
    }
    arr.push(ar);
    playground.appendChild(row);
  }
  return arr;
}


// selecting a cell to live 
playground.addEventListener("click", (e) => {
  console.log(e.target.classList);
  if (e.target.hasChildNodes()) return;

  let index = e.target.id.split(",");

  if (cur_gen[Number(index[0])][Number(index[1])]) {
    e.target.setAttribute("class", "cell");
    cur_gen[Number(index[0])][Number(index[1])] = false;
  } else {
    e.target.setAttribute("class", "cellLive");
    cur_gen[Number(index[0])][Number(index[1])] = true;
  }
});

//// game of life function
const gameOfLife = () => {
  console.log("inside game of life ");
  const arr = [];
  for (let i = 0; i < num; i++) {
    const ar = [];
    for (let j = 0; j < num; j++) ar.push(false);

    arr.push(ar);
  }
  const next_gen = arr;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      let neighbour = 0;
      //upp
      if (i > 0 && cur_gen[i - 1][j] === true) neighbour++;

      //upper left 
      if(i>0 && j>0 && cur_gen[i-1][j-1]===true) neighbour++;

      // upper right 
      if(i>0 && j<num-1 && cur_gen[i-1][j+1]===true) neighbour++;

      // left
      if (j > 0 && cur_gen[i][j - 1] === true) neighbour++;

      // down
      if (i < num - 1 && cur_gen[i + 1][j] === true) neighbour++;

      //down right 
      if(i<num-1 && j<num-1 && cur_gen[i+1][j+1]===true) neighbour++;

      //down left 
      if(i<num-1 && j>0 && cur_gen[i+1][j-1]===true) neighbour++;

      //right
      if (j < num - 1 && cur_gen[i][j + 1] === true) neighbour++;

      //check for the current life or death of a cell
      if ((neighbour < 2 || neighbour > 3) && cur_gen[i][j] ) {
        next_gen[i][j] = false;
        document
          .getElementById(String(i) + "," + String(j))
          .setAttribute("class", "cell");
      } else if (neighbour === 3 && !cur_gen[i][j]) {
        next_gen[i][j] = true;
        document
          .getElementById(String(i) + "," + String(j))
          .setAttribute("class", "cellLive");
      }else{
        next_gen[i][j]=cur_gen[i][j];
      }
    }
  }
  cur_gen = next_gen;

  return;
};
