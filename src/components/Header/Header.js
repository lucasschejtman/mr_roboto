import React from 'react'; // eslint-disable-line no-unused-vars
import styles from './Header.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import Navigation from '../Navigation';

@withStyles(styles)
class Header {
  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <Navigation className="Header-nav" />
        </div>
      </div>
    );
  }
}

export default Header;
