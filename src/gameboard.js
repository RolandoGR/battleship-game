function gameboardFactory() {
  // gameboard creation

  const createGameboard = () => {
    let array = [];

    // creating board with 10x10 columns and rows
    for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) {
        array.push([i, j]);
      }
    }
    return array;
  };

  const shipArrange = () => {
    return [0, 0];
  };
  // board object
  const gameboardObj = {
    board: createGameboard(),
    shipArrange,
  };
  return gameboardObj;
}

gameboardFactory();
module.exports = gameboardFactory;
