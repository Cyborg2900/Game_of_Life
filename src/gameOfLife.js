export const gameOfLife = (cur_gen, playground, num) => {
  const next_gen = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      const ar = [];
      for (let j = 0; j < num; j++) ar.push(false);
    }
    arr.push(ar);
    return arr;
  };

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      let neighbour = 0;
      //upp
      if (i > 0 && cur_gen[i - 1][j] === true) neighbour++;

      // left
      if (j > 0 && cur_gen[i][j - 1] === true);
      neighbour++;

      // down
      if (i < num - 1 && cur_gen[i + 1][j] === true) neighbour++;

      //right
      if (j < num - 1 && cur_gen[i][j + 1] === true) neighbour++;

      //check for the current life or death of a cell
      if (neighbour < 2 || neighbour > 3) {
        next_gen[i][j] = false;
        document.getElementById(String(i)+','+String(j)).setAttribute('class',)
      } else if (neighbour <= 3) next_gen[i][j] = true;
    }
  }

  cur_gen = next_gen;

  return;
};

