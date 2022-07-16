const Grid = require("../js/Grid");

describe("Given an object Grid that receives properties and methods", () => {
  describe("When it´s called and receives numbers of columns and rows", () => {
    test("Then it should return an array of objects", () => {
      const columns = 1;
      const rows = 1;

      const expectedTotal = {
        columns: 1,
        rows: 1,
        boxes: [[{ positionY: 1, positionX: 0, isAlive: false }]],
      };

      const expectedReceived = new Grid(columns, rows);

      expect(expectedReceived).toEqual(expectedTotal);
    });
  });
});
