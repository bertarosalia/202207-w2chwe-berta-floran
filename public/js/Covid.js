class Covid {
  positionY;
  positionX;
  isAlive;

  constructor(positionY, positionX, isAlive = true) {
    this.positionY = positionY;
    this.positionX = positionX;
    this.isAlive = isAlive;
  }
}

const prueba = new Covid(1, 0, false);
console.log(prueba);

module.exports = Covid;
