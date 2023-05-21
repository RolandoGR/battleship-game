function shipFactory(length) {
  let hits = 0;
  const newHit = () => {
    hits++;
    shipObj.hits = hits;
    shipObj.isSunk = length === hits;
    return { hits, isSunk };
  };

  let isSunk = length === hits;

  const shipObj = {
    length,
    hits,
    newHit,
    isSunk,
  };

  return shipObj;
}

module.exports = {
  shipFactory: shipFactory,
};
