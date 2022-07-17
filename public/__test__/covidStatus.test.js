describe("Given a function covidStatus that receives parameters", () => {
  describe("When it´s called and receives number for counter and boolean status", () => {
    test("Then it should return a boolean", () => {
      let isAliveCovid = true;
      const counter = 4;
      const expectedResult = false;

      const covidStatus = () => {
        if ((isAliveCovid === true && counter < 2) || counter > 3) {
          isAliveCovid = false;
        } else if ((isAliveCovid === true && counter === 2) || counter === 3) {
          isAliveCovid = true;
        }
        return isAliveCovid;
      };

      const result = covidStatus();

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
