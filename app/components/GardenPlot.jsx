import React, {Component} from 'react';
import GardenSquare from './GardenSquare';

import classNames from 'classnames/bind';
import styles from 'css/components/gardenplot';

const cx = classNames.bind(styles);

export default class GardenPlot extends Component {

  render() {

    let squares = this.props.garden.plots.map((square, index) => {
      return <GardenSquare key={index} square={square}></GardenSquare>
    })

    let plotWidth = this.props.garden.width * 100;

    return (
      <div className={cx('gardenplot')} style={{width: plotWidth}}>
        {squares}
      </div>
      );
  }

}
