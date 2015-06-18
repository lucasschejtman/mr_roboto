import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import styles from './PlaygroundPage.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import SimulationCanvas from '../SimulationCanvas';

@withStyles(styles)
class PlaygroundPage {
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Playground';
    this.context.onSetTitle(title);
    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading">Simulation Room</div>
              <div className="panel-body">
                <SimulationCanvas />
              </div>
            </div>
        </div>
        <div className="col-lg-5">
          <div className="panel panel-default">
            <div className="panel-heading">Settings</div>
              <div className="panel-body">
                <SimulationCanvas />
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default PlaygroundPage;
