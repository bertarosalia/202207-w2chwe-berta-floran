const Covid = require("./Covid");

class Grid {
  columns;
  rows;
  boxes;

  constructor(columns, rows) {
    this.columns = columns;
    this.rows = rows;
    this.boxes = this.createBoxes();
  }

  createBoxes() {
    const boxes = new Array(this.columns).fill(
      new Array(this.rows).fill(new Covid())
    );
    return boxes;
  }
}

module.exports = Grid;
