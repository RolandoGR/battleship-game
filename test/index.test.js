const { shipFactory } = require("../src/index");
const gameboardFactory = require("../src/gameboard");

describe("ship", () => {
  test("should return an object with the correct properties", () => {
    const length = 3;
    const myShip = shipFactory(length);

    expect(myShip).toEqual(
      expect.objectContaining({
        length: length,
        hits: 0,
        newHit: expect.any(Function),
        isSunk: false,
      })
    );
  });

  test("should increment the hits count when calling newHit", () => {
    const length = 3;
    const myShip = shipFactory(length);

    myShip.newHit();
    expect(myShip.hits).toBe(1);

    myShip.newHit();
    expect(myShip.hits).toBe(2);

    myShip.newHit();
    expect(myShip.hits).toBe(3);
  });

  test("should correctly determine if the ship is sunk", () => {
    const length = 3;
    const myShip = shipFactory(length);

    expect(myShip.isSunk).toBe(false);

    myShip.newHit();
    myShip.newHit();
    myShip.newHit();

    expect(myShip.isSunk).toBe(true);
  });
});

describe("gameboard", () => {
  const myGameboard = gameboardFactory();
  test("gameboardOBj has 'board' function", () => {
    expect(myGameboard).toHaveProperty("board");
  });
  test("shipArrange exists", () => {
    expect(myGameboard.shipArrange()).toStrictEqual([0, 0]);
  });
});
