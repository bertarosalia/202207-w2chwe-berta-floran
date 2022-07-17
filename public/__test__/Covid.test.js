const Covid = require("../js/Covid");

describe("Given an object Covid that receives properties", () => {
  describe("When it´s called and receives a value false and with values for both positions", () => {
    test("Then it should return an object with 1 position for, 0 for x and false for isAlive", () => {
      const isAlive = false;

      const expectedTotal = { isAlive: false };

      const expectedReceived = new Covid(isAlive);

      expect(expectedReceived).toEqual(expectedTotal);
    });
  });
});
