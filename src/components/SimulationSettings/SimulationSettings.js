import React from 'react'; // eslint-disable-line no-unused-vars
import styles from './SimulationSettings.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import EventEmitter from 'eventemitter3';
import SimulationConstants from '../SimulationCanvas/SimulationConstants';

@withStyles(styles)
class SimulationSettings {
  static defaultProps = {
    steps: ['PLACE 1,2,SOUTH', 'MOVE', 'REPORT']
  };

  runSimulation() {
    EventEmitter.prototype.emit(SimulationConstants.SIMULATION_START, ['PLACE 1,2,SOUTH', 'MOVE', 'REPORT']);
  };

  render() {
    var steps = this.props.steps.map((step, i) => {
      return <li className="list-group-item" id={i}>{ step }</li>;
    });

    return (
      <div className="row">
        <div className="col-lg-6">
          <ul class="list-group">
            { steps }
          </ul>
        </div>
        <button className="btn btn-info" onClick={this.runSimulation}>Run Simulation</button>
      </div>
    );
  };
}

export default SimulationSettings;
