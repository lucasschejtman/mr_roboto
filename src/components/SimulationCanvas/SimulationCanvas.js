import React from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames'; // eslint-disable-line no-unused-vars
import styles from './SimulationCanvas.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import Robot from './Robot/Robot';
import Commander from './Robot/Commander';
import EventEmitter from 'eventemitter3';
import SimulationConstants from './SimulationConstants';

let robot;

@withStyles(styles)
class SimulationCanvas {
  static defaultProps = {
    cells: 5,
    cellSize: 120,
    cellColor: '#ccc',
    canvasId: 'canvas',
    canvasWidth: 610,
    canvasHeight: 610
  };

  componentDidMount() {
    let canvas = new fabric.Canvas(this.props.canvasId, { selection: false }); // eslint-disable-line no-undef
    this.drawGrid(canvas);
    this.drawRobot(canvas);
  };

  drawGrid(canvas) {
    let cell = this.props.cellSize;
    let canvasWidth = this.props.cellSize * this.props.cells;

    for (let i = 0; i <= (canvasWidth / cell); i++) {
      canvas.add(new fabric.Line([ i * cell, 0, i * cell, canvasWidth], { stroke: this.props.cellColor, selectable: false })); // eslint-disable-line no-undef
      canvas.add(new fabric.Line([ 0, i * cell, canvasWidth, i * cell], { stroke: this.props.cellColor, selectable: false })); // eslint-disable-line no-undef
    }
  };

  drawRobot(canvas){
    let cell = this.props.cellSize;
    let canvasWidth = this.props.cellSize * this.props.cells;

    fabric.Image.fromURL('robot.gif', function(img) { // eslint-disable-line no-undef
      robot = new Robot(canvas, cell);
      robot.picture = img;
      robot.image.set({
        angle: 0,
        left: cell / 2,
        top: canvasWidth - (cell / 2),
        width: cell,
        height: cell,
        originX: 'center',
        originY: 'center',
        selectable: false,
        hasControls: false,
        hasBorders: false,
        centeredRotation: true
      });

      canvas.add(robot.image);

      EventEmitter.prototype.on(SimulationConstants.SIMULATION_START, (sequence) => {
        let commander = new Commander(sequence);
        robot.runCommands(commander.sequence);
      });
    });
  };

  render() {
    return (
      <canvas id={this.props.canvasId} width={this.props.canvasWidth} height={this.props.canvasHeight}></canvas>
    );
  };
}

export default SimulationCanvas;
