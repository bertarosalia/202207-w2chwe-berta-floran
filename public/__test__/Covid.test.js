const Covid = require("../js/Covid");

describe("Given an object Covid that receives properties", () => {
  describe("When it´s called and receives a value false and with values for both positions", () => {
    test("Then it should return an object with 1 position for, 0 for x and false for isAlive", () => {
      const positionY = 1;
      const positionX = 0;
      const isAlive = false;

      const expectedTotal = { positionY: 1, positionX: 0, isAlive: false };

      const expectedReceived = new Covid(positionY, positionX, isAlive);

      expect(expectedReceived).toEqual(expectedTotal);
    });
  });
});
