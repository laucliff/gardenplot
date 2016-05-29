import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import classNames from 'classnames/bind';
import styles from 'css/components/gardensquare';

import {setDrawerContext, openDrawer} from 'actions/drawer';

const cx = classNames.bind(styles);

class GardenSquare extends Component {

  activateDrawer = (id) => {
    this.props.setDrawerContext(id)
    this.props.openDrawer()
  }


  render() {

    return (
      <div className={cx('gardensquare')} onClick={this.activateDrawer.bind(this, this.props.index)}>
        Square: {this.props.square.plantId}
      </div>);
  }

};

GardenSquare.propTypes = {
  square: PropTypes.object,
  openDrawer: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, { setDrawerContext, openDrawer })(GardenSquare);

