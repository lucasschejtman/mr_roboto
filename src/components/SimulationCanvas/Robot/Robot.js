import Orientation from './Orientation';

class Robot {
  constructor(canvas, stepSize) {
    this.commands = [];
    this.canvas = canvas;
    this.hasPlace = false;
    this.stepSize = stepSize;
    this.xMinBoundary = 0;
    this.xMaxBoundary = this.stepSize * 5;
    this.yMinBoundary = 0;
    this.yMaxBoundary = this.stepSize * 5;
    this.turnAngle = 90;
    this.angleAnimation = fabric.util.ease.easeOutBounce; // eslint-disable-line no-undef
    this.moveAnimation = fabric.util.ease.easeInQuad; // eslint-disable-line no-undef
  };

  runCommands(commands) {
    this.commands = commands;
    this.runNextCommand();
  };

  runNextCommand() {
    if(this.commands.length > 0) {
      let command = this.commands.shift();
      command.execute(this);
    }
  };

  commandComplete() {
    this.runNextCommand();
  };

  place(coordinates) {
    if(!this.hasPlace) { this.hasPlace = true; }

    this.image.set({
      left: (this.stepSize * coordinates.x) + (this.stepSize / 2),
      top: (this.yMaxBoundary - (this.stepSize * coordinates.y)) - (this.stepSize / 2),
      angle: 360 - Orientation.find(o => o.name === coordinates.o).angle
    });
    this.canvas.renderAll();
    this.commandComplete();
  };

  move() {
    let direction = (this.image.get('angle') / 90) % 4 + 1;
    let orientation = (direction % 2) === 0 ? 'top' : 'left';
    let futureMove = this._canPerformMove(orientation, direction); // eslint-disable-line no-underscore-dangle
    if(futureMove === null){
      this.commandComplete();
      return;
    }

    this.image.animate(orientation, futureMove, {
      duration: 1000,
      onChange: this.canvas.renderAll.bind(this.canvas),
      onComplete: () => { this.commandComplete(); },
      easing: this.moveAnimation
    });
  };

  left() {
    this._rotate(this.image.get('angle') - this.turnAngle); // eslint-disable-line no-underscore-dangle
  };

  right() {
    this._rotate(this.image.get('angle') + this.turnAngle); // eslint-disable-line no-underscore-dangle
  };

  report() {
    var coords = {
      x: (this.image.left - (this.stepSize / 2)) / this.stepSize,
      y: (this.yMaxBoundary - (this.image.top + (this.stepSize / 2))) / this.stepSize,
      o: Orientation.find(o => +o.angle === 360 - +this.image.angle).name
    };
    console.log(coords);
  };

  _rotate(angle) {
    this.image.animate('angle', angle, {
      duration: 1000,
      onChange: this.canvas.renderAll.bind(this.canvas),
      onComplete: () => { this.commandComplete(); },
      easing: this.angleAnimation
    });
  };

  // Returns futureMove if allowed, null otherwise
  _canPerformMove(orientation, direction) {
    if(orientation === 'top') {
      let nextY = direction === 2 ? this.image.top + this.stepSize : this.image.top - this.stepSize;
      return (nextY >= this.yMinBoundary && nextY <= this.yMaxBoundary) ? nextY : null;
    }

    if(orientation === 'left') {
      let nextX = direction === 1 ? this.image.left + this.stepSize : this.image.left - this.stepSize;
      return (nextX >= this.xMinBoundary && nextX <= this.xMaxBoundary) ? nextX : null;
    }
  };

  set picture(img) {
    this.image = img;
  };
}

export default Robot;
