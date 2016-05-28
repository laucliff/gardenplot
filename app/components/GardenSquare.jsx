import React, {Component} from 'react';

import classNames from 'classnames/bind';
import styles from 'css/components/gardensquare';

const cx = classNames.bind(styles);

export default class GardenSquare extends Component {

  render() {
    return (
      <div className={cx('gardensquare')}>
        Square: {this.props.square.type}
      </div>);
  }

};
