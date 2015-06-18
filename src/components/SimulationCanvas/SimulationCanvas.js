import React from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import styles from './SimulationCanvas.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars

@withStyles(styles)
class SimulationCanvas {
  static defaultProps = {
    cellSize: 120,
    cellColor: '#ccc',
    canvasId: 'canvas'
  };

  componentDidMount() {
    let robot;
    let cell = this.props.cellSize;
    let canvas = new fabric.Canvas(this.props.canvasId, { selection: false });

    for (let i = 0; i <= (600 / cell); i++) {
      canvas.add(new fabric.Line([ i * cell, 0, i * cell, 600], { stroke: this.props.cellColor, selectable: false }));
      canvas.add(new fabric.Line([ 0, i * cell, 600, i * cell], { stroke: this.props.cellColor, selectable: false }))
    }

    fabric.Image.fromURL('robot.gif', function(img) {
      robot = img;
      robot.facing = 'east';
      robot.set({
        left: 60,
        top: 540,
        width: 120,
        height: 120,
        fill: '#faa',
        originX: 'center',
        originY: 'center',
        selectable: false,
        hasControls: false,
        hasBorders: false,
        centeredRotation: true
      });

      canvas.add(robot);
    });
  };

  render() {
    return (
      <canvas id={this.props.canvasId} width="610" height="610"></canvas>
    );
  };
}

export default SimulationCanvas;
