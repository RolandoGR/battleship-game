const ship = require("./src/index");

test("Ship object ", () => {
  expect(ship.ship(1, 2)).toBe(3);
});
