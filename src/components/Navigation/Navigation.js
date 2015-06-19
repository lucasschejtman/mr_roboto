import React from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import styles from './Navigation.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import Link from '../../utils/Link';

@withStyles(styles)
class Navigation {
  render() {
    return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
        <a className="Navigation-link" href="/" onClick={Link.handleClick}>Home</a>
        <a className="Navigation-link" href="/playground" onClick={Link.handleClick}>Playground</a>
      </div>
    );
  }
}

export default Navigation;
