let isAliveCovid = true;
const counter = 2;

const covidStatus = () => {
  if ((isAliveCovid === true && counter < 2) || counter > 3) {
    isAliveCovid = false;
  } else if ((isAliveCovid === true && counter === 2) || counter === 3) {
    isAliveCovid = true;
  }
};

const covidRise = () => {
  if (isAliveCovid === false && counter === 3) {
    isAliveCovid = true;
  }
  return isAliveCovid;
};

module.exports = covidStatus();
module.exports = covidRise();
