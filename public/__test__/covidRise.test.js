describe("Given a function covidRise that receives parameters", () => {
  describe("When it´s called and receives number for counter and boolean status", () => {
    test("Then it should return a boolean", () => {
      let isAliveCovid = false;
      const counter = 3;
      const expectedResult = true;

      const covidRise = () => {
        if (isAliveCovid === false && counter === 3) {
          isAliveCovid = true;
        }
        return isAliveCovid;
      };

      const result = covidRise();

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
