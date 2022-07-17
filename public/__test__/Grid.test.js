const Grid = require("../js/Grid");

describe("Given an object Grid that receives properties and methods", () => {
  describe("When it´s called and receives numbers of columns and rows", () => {
    test("Then it should return an array of objects", () => {
      const columns = 1;
      const rows = 1;

      const expectedTotal = new Grid(columns, rows);

      const expectedReceived = new Grid(columns, rows);

      expect(expectedReceived).toEqual(expectedTotal);
    });
  });
});
