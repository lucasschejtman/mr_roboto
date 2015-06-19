import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import styles from './SimulationSettings.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import EventEmitter from 'eventemitter3';
import SimulationConstants from '../SimulationCanvas/SimulationConstants';

@withStyles(styles)
class SimulationSettings extends Component {
  static defaultProps = {
    simulations: [
      { name: 'Example 1', data: ['PLACE 0,0,NORTH', 'MOVE', 'REPORT'] },
      { name: 'Example 2', data: ['PLACE 0,0,NORTH', 'LEFT', 'REPORT'] },
      { name: 'Example 3', data: ['PLACE 1,2,EAST', 'MOVE', 'MOVE', 'LEFT', 'MOVE', 'REPORT'] },
      { name: 'Example 4', data: ['PLACE 3,3,SOUTH', 'MOVE', 'MOVE', 'LEFT', 'MOVE', 'REPORT'] }, 
      { name: 'Example 6', data: ['PLACE 2,2,EAST', 'LEFT', 'RIGHT', 'MOVE', 'MOVE', 'REPORT'] }
    ]
  };

  constructor(){
    super();
    this.state = {
      activeSimulation: ['PLACE 0,0,NORTH', 'MOVE', 'REPORT']
    };
  }

  runSimulation() {
    EventEmitter.prototype.emit(SimulationConstants.SIMULATION_START, this.state.activeSimulation);
  };

  selectSimulation(i) {
    this.setState({activeSimulation: this.props.simulations[i].data});
  };

  render() {
    var steps = this.state.activeSimulation.map((step, i) => {
      return <li className="list-group-item" key={i}>{ step }</li>;
    });
    console.log(steps);
    var simulations = this.props.simulations.map((simulation, i) => {
      return <a href="#" onClick={this.selectSimulation.bind(this, i)} className="list-group-item" key={i}>{ simulation.name }</a>;
    });

    return (
      <div className="row">
        <button className="btn btn-info" onClick={this.runSimulation.bind(this)}>Run Simulation</button>
        <h4>Select Simulation</h4>
        <ul className="list-group">
          { simulations }
        </ul>
        <h4>Selected Steps</h4>
        <ul className="list-group">
          { steps }
        </ul>
      </div>
    );
  };
}

export default SimulationSettings;
