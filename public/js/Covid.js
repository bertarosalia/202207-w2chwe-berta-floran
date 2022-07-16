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
module.exports = Covid;
